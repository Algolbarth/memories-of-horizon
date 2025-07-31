import { Entity } from './Entity';
import { Chapter } from '../Chapters/Chapter';
import { Battle } from './Battle';
import { copy } from '../Utils';
import type { Deck } from '../Decks/Deck';
import type { System } from '../System/Class';
import type { Card } from '../Cards/Class';
import type { Component } from 'svelte';

export class Game extends Battle {
    use: Use = new Use();
    flux: boolean = false;
    pause: boolean = false;
    phase: string = "Préparation";
    deck: Deck | undefined = undefined;
    mode: string;
    player: Entity = new Entity(this.system);
    bot: Entity = new Entity(this.system);
    chapter: Chapter | undefined;

    constructor(system: System, mode: string, deck: (Deck | undefined) = undefined) {
        super(system);

        this.mode = mode;
        this.deck = deck;
    };

    init = function () {
        if (this.mode == "Entraînement") {
            this.player.life.set(this.system.train.player.life);
            this.player.ressource("Or").max = this.system.train.player.gold;
            this.player.ressource("Flux").stock = this.system.train.player.flux;
            this.player.zone("Boutique").level = this.system.train.player.zones[1].level;
            for (const zone of this.system.train.player.zones) {
                this.player.zone(zone.name).size = zone.size;
                for (const card_name of zone.cards) {
                    this.player.getCard(card_name).add(zone.name);
                }
            }
            this.player.place = this.player.zone("Lieux").cards[0];

            this.bot.life.set(this.system.train.bot.life);
            this.bot.ressource("Or").max = this.system.train.bot.gold;
            this.bot.ressource("Or").current = this.system.train.bot.gold;
            this.bot.ressource("Flux").stock = this.system.train.bot.flux;
            this.bot.zone("Boutique").level = this.system.train.bot.zones[1].level;
            for (const zone of this.system.train.bot.zones) {
                this.bot.zone(zone.name).size = zone.size;
                for (const card_name of zone.cards) {
                    let card = this.bot.getCard(card_name);
                    card.add(zone.name);
                    card.cache = false;
                }
            }
            this.bot.place = this.bot.zone("Lieux").cards[0];

            this.startStep();
        }
        else {
            this.player.life.set(100);
            this.player.ressource("Or").max = 4;
            this.player.ressource("Flux").stock = 4;

            this.player.getCard("Plaine").add("Lieux");
            this.player.place = this.player.zone("Lieux").cards[0];

            this.player.getCard("Humain").add("Terrain");

            this.chapter = new Chapter(this.system, 0);

            this.nextChapter();
        }
    };

    nextChapter = function () {
        if (this.chapter.number < 50) {
            this.bot = new Entity(this.system);

            let number = this.chapter.number + 1;
            if (number % 10 == 0) {
                this.chapter = this.system.bosses.getRandom(number);
            }
            else {
                this.chapter = this.system.chapters.getRandom(number);
            }

            this.chapter.init();

            this.startChapter();
        }
        else {
            this.victory();
        }
    };

    startChapter = function () {
        this.player.ressource("Or").max++;
        this.player.ressource("Flux").stock++;

        for (let i = 0; i < 3; i++) {
            this.bot.play();
        }

        this.bot.life.set(this.chapter.steps[0].life);

        this.bot.zone("Lieux").cards = [];
        this.bot.getCard(this.chapter.steps[0].place).add("Lieux");
        this.bot.place = this.bot.zone("Lieux").cards[0];

        this.startStep();
    };

    startStep = function () {
        for (const ressource of this.player.ressources) {
            ressource.current = ressource.max;
        }

        if (this.mode != "Entraînement") {
            this.player.refreshShop();
        }

        for (const entity of [this.player, this.bot]) {
            for (const zone of entity.zones) {
                let cpy = copy(zone.cards);
                for (const card of cpy) {
                    card.startStepEffect();
                    if (card.type == "Créature") {
                        for (const e of card.equipments) {
                            e.startStepEffect();
                        }
                    }
                }
            }
        }

        if (this.mode != "Entraînement") {
            this.chapter.startDialog();
        }
        else {
            this.system.page = "Game";
        }
    };

    endStep = function () {
        this.player.checkPerpetuite();
        this.bot.checkPerpetuite();

        for (const entity of [this.player, this.bot]) {
            for (const zone of entity.zones) {
                let cpy = copy(zone.cards);
                for (const card of cpy) {
                    for (const stat of card.stats) {
                        stat.step = 0;
                    }
                    for (const trait of card.traits) {
                        trait.step = false;
                    }
                    if (card.type == "Créature" && card.stat("Étourdissement").value() > 0) {
                        card.stat("Étourdissement").remove(1);
                    }
                }
            }
        }
    };

    nextStep = function () {
        if (this.mode == "Entraînement") {
            this.startStep();
            this.bot.play();
        }
        else {
            if (this.player.step < this.chapter.steps.length) {
                this.player.step++;

                this.system.game.bot.life.set(this.chapter.steps[this.system.game.player.step - 1].life);

                this.bot.zone("Lieux").cards = [];
                this.bot.getCard(this.chapter.steps[this.system.game.player.step - 1].place).add("Lieux");
                this.bot.place = this.bot.zone("Lieux").cards[0];

                this.startStep();
                this.bot.play();
            }
            else {
                this.nextChapter();
            }
        }
    };

    victory = function () {
        if (this.mode == "Aventure") {
            this.system.account.aventure.victory++;
        }
        else if (this.mode == "Construit") {
            this.system.account.construct.victory++;
        }
        this.deck.victory++;
        this.system.page = "Victory";
    };

    defeat = function () {
        if (this.mode == "Aventure") {
            this.system.account.aventure.defeat++;
        }
        else if (this.mode == "Construit") {
            this.system.account.construct.defeat++;
        }
        this.deck.defeat++;
        this.system.page = "GameOver";
    };
};

class Use {
    card: Card | undefined = undefined;
    svelte: Component | undefined = undefined;

    set = function (card: Card, svelte: Component) {
        this.card = card;
        this.svelte = svelte;
    };

    reset = function () {
        this.card = undefined;
        this.svelte = undefined;
    };
};