import { Entity } from './Entity';
import { Chapter } from '../Chapters/Class';
import { Battle } from './Battle';
import { copy } from '../Utils';
import type { Deck } from '../Decks/Deck';
import type { System } from '../System/Class';
import type { Card } from '../Cards/Class';
import type { Component } from 'svelte';
import type { TrainEntity } from '../Training/Train';

export class Game extends Battle {
    use: Use = new Use();
    pause: boolean = false;
    deck: Deck | undefined = undefined;
    mode: string;
    chapter: Chapter | undefined;

    constructor(system: System, mode: string, deck: (Deck | undefined) = undefined) {
        super(system);

        this.mode = mode;
        this.deck = deck;
    };

    init = () => {
        if (this.mode == "Entraînement") {
            this.trainInit();
        }
        else {
            this.player.life.set(100);
            this.player.ressource("Or").production = 4;
            this.player.ressource("Flux").stock = 4;

            this.player.getCard("Plaine").add("Région");
            this.player.place = this.player.zone("Région").cards[0];

            this.player.getCard("Humain").add("Terrain");

            this.chapter = new Chapter(this.system, this, 0);

            this.nextChapter();
        }
    };

    trainInit = () => {
        this.trainInitEntity(this.player, this.system.train.player);
        this.trainInitEntity(this.bot, this.system.train.bot);

        this.startStep();
    };

    trainInitEntity = (entity: Entity, train_entity: TrainEntity) => {
        entity.life.set(train_entity.life);

        entity.ressource("Or").production = train_entity.gold;
        entity.ressource("Or").current = train_entity.gold;
        entity.ressource("Flux").stock = train_entity.flux;
        entity.ressource("Mana").stock = train_entity.mana;

        entity.zone("Pile").level = train_entity.zones[1].level;
        for (const zone of train_entity.zones) {
            entity.zone(zone.name).size = zone.size;
            for (const card_name of zone.cards) {
                entity.getCard(card_name).add(zone.name);
            }
        }
        entity.place = entity.zone("Région").cards[0];
    };

    nextChapter = () => {
        if (this.chapter != undefined && this.chapter.number < 100) {
            this.bot = new Entity(this.system);

            let number = this.chapter.number + 1;
            if (number % 10 == 0) {
                this.chapter = this.system.bosses.getRandom(number);
            }
            else {
                this.chapter = this.system.chapters.getRandom(number);
            }

            this.chapter?.init();

            this.startChapter();
        }
        else {
            this.victory();
        }
    };

    startChapter = () => {
        this.player.ressource("Or").production++;
        this.player.ressource("Flux").stock++;

        this.bot.life.set(this.chapter.steps[0].life);
        this.bot.zone("Pile").level = 1 + Math.floor((this.chapter.number - 1) / 5);
        for (const zone of this.bot.zones) {
            if (zone.name == "Région") {
                if (this.chapter.steps[0].locations.length > 3) {
                    zone.size = this.chapter.steps[0].locations.length;
                }
                else {
                    zone.size = 3;
                }
            }
            else if (zone.name != "Défausse") {
                zone.size = this.chapter.steps[0].zone_size;
            }
        }
        this.bot.zone("Région").cards = [];
        for (const location of this.chapter.steps[0].locations) {
            this.bot.getCard(location).add("Région");
        }
        this.bot.place = this.bot.zone("Région").cards[0];

        for (let i = 0; i < 3; i++) {
            this.bot.play();
        }

        this.startStep();
    };

    startStep = () => {
        for (const ressource of this.player.ressources) {
            ressource.current = ressource.production;
        }

        if (this.mode != "Entraînement") {
            this.player.refreshStack();
        }

        for (const entity of [this.player, this.bot]) {
            for (const zone of entity.zones) {
                let cpy = copy(zone.cards);
                for (const card of cpy) {

                    if (card.startStepEffect != undefined) {
                        card.startStepEffect();
                    }

                    if (card.type == "Créature") {
                        for (const e of card.equipments) {
                            if (e.startStepEffect != undefined) {
                                e.startStepEffect();
                            }
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

    endStep = () => {
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
                    if (card.stat("Brûlure").value() > 0) {
                        card.stat("Brûlure").set(0);
                    }
                }
            }
        }
    };

    nextStep = () => {
        if (this.mode == "Entraînement") {
            this.startStep();
            this.bot.play();
        }
        else {
            if (this.player.step < this.chapter.steps.length) {
                this.player.step++;

                this.bot.life.set(this.chapter.steps[this.player.step - 1].life);

                this.bot.zone("Région").cards = [];
                this.bot.getCard(this.chapter.steps[this.player.step - 1].place).add("Région");
                this.bot.place = this.bot.zone("Région").cards[0];

                this.startStep();
                this.bot.play();
            }
            else {
                this.nextChapter();
            }
        }
    };

    victory = () => {
        if (this.mode == "Pré-construit") {
            this.system.account.preconstruct.victory++;
        }
        else if (this.mode == "Construit") {
            this.system.account.construct.victory++;
        }
        this.deck.victory++;
        this.system.page = "Victory";
    };

    defeat = () => {
        if (this.mode == "Pré-construit") {
            this.system.account.preconstruct.defeat++;
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

    set = (card: Card, svelte: Component) => {
        this.card = card;
        this.svelte = svelte;
    };

    reset = () => {
        this.card = undefined;
        this.svelte = undefined;
    };
};