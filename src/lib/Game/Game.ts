import { Entity } from './Entity';
import { Chapter } from '../Chapters/Class';
import { copy } from '../Utils';
import type { System } from '../System/Class';
import { Unit, type Card } from '../Cards/Class';
import type { Component } from 'svelte';
import type { TrainEntity } from '../Training/Train';
import { Creature } from '../Cards/Class/Creature';
import { Deck } from '../Deck/Class';

export class Game {
    system: System;
    phase: string = "Préparation";
    player: Entity;
    bot: Entity;
    use: Use = new Use();
    pause: boolean = false;
    mode: string;
    chapter: Chapter | undefined;
    fighter: Unit | undefined = undefined;
    auto: number | undefined;
    turn: number = 1;

    constructor(system: System, mode: string, deck: Deck | undefined = undefined) {
        this.system = system;

        this.player = new Entity(this.system, new Deck(system));
        this.bot = new Entity(this.system, new Deck(system));

        this.mode = mode;
        this.system.game = this;

        if (this.mode == "Entraînement") {
            this.trainInit();
        }
        else if (deck != undefined && (this.mode == "Libre" || this.mode == "Standard")) {
            this.player.life.set(100);
            this.player.ressource("Or").production = 4;
            this.player.ressource("Flux").stockage = 4;
            this.player.deck = deck;

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

        entity.deck = train_entity.deck;

        entity.ressource("Or").production = train_entity.gold;
        entity.ressource("Or").current = train_entity.gold;
        entity.ressource("Flux").stockage = train_entity.flux;
        entity.ressource("Mana").stockage = train_entity.mana;

        entity.zone("Pile").base_level = train_entity.zones[1].level;
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
            this.bot = new Entity(this.system, this.chapter.deck);

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
        this.player.ressource("Or").increase(1);
        this.player.ressource("Flux").stock(1);

        this.bot.deck = this.chapter.steps[0].deck;
        this.bot.life.set(this.chapter.steps[0].life);
        this.bot.zone("Pile").base_level = 1 + Math.floor((this.chapter.number - 1) / 5);
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
        for (const name of this.chapter.steps[this.bot.step].cards) {
            this.bot.getCard(name).add("Pile");
        }
        for (const ressource of this.bot.ressources) {
            ressource.current = ressource.production;
        }

        this.bot.play();

        this.startPhase();
    };

    startPhase = () => {
        for (const ressource of this.player.ressources) {
            ressource.current = ressource.production;
        }

        if (this.mode != "Entraînement") {
            this.player.refreshStack();
        }

        this.botTurn();
    };

    botTurn = () => {
        for (const zone of this.player.zones) {
            let cpy = copy(zone.cards);
            for (const card of cpy) {

                if (card.startAdversaryStepEffect != undefined) {
                    card.startAdversaryStepEffect();
                }

                if (card instanceof Creature) {
                    for (const e of card.equipments) {
                        if (e.startAdversaryStepEffect != undefined) {
                            e.startAdversaryStepEffect();
                        }
                    }
                }
            }
        }
        for (const zone of this.bot.zones) {
            let cpy = copy(zone.cards);
            for (const card of cpy) {

                if (card.startStepEffect != undefined) {
                    card.startStepEffect();
                }

                if (card instanceof Creature) {
                    for (const e of card.equipments) {
                        if (e.startStepEffect != undefined) {
                            e.startStepEffect();
                        }
                    }
                }
            }
        }

        this.bot.play();

        for (const zone of this.player.zones) {
            let cpy = copy(zone.cards);
            for (const card of cpy) {

                if (card.endAdversaryStepEffect != undefined) {
                    card.endAdversaryStepEffect();
                }

                if (card instanceof Creature) {
                    for (const e of card.equipments) {
                        if (e.endAdversaryStepEffect != undefined) {
                            e.endAdversaryStepEffect();
                        }
                    }
                }
            }
        }
        for (const zone of this.bot.zones) {
            let cpy = copy(zone.cards);
            for (const card of cpy) {

                if (card.endStepEffect != undefined) {
                    card.endStepEffect();
                }

                if (card instanceof Creature) {
                    for (const e of card.equipments) {
                        if (e.endStepEffect != undefined) {
                            e.endStepEffect();
                        }
                    }
                }
            }
        }

        this.startStep();
    };

    startStep = () => {
        for (const zone of this.player.zones) {
            let cpy = copy(zone.cards);
            for (const card of cpy) {

                if (card.startStepEffect != undefined) {
                    card.startStepEffect();
                }

                if (card instanceof Creature) {
                    for (const e of card.equipments) {
                        if (e.startStepEffect != undefined) {
                            e.startStepEffect();
                        }
                    }
                }
            }
        }
        for (const zone of this.bot.zones) {
            let cpy = copy(zone.cards);
            for (const card of cpy) {

                if (card.startAdversaryStepEffect != undefined) {
                    card.startAdversaryStepEffect();
                }

                if (card instanceof Creature) {
                    for (const e of card.equipments) {
                        if (e.startAdversaryStepEffect != undefined) {
                            e.startAdversaryStepEffect();
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

    isBattle = () => {
        if (this.phase == "Combat") {
            return true;
        }
        return false;
    };

    newBattle = () => {
        for (const zone of this.player.zones) {
            let cpy = copy(zone.cards);
            for (const card of cpy) {

                if (card.endStepEffect != undefined) {
                    card.endStepEffect();
                }

                if (card instanceof Creature) {
                    for (const e of card.equipments) {
                        if (e.endStepEffect != undefined) {
                            e.endStepEffect();
                        }
                    }
                }
            }
        }
        for (const zone of this.bot.zones) {
            let cpy = copy(zone.cards);
            for (const card of cpy) {

                if (card.endAdversaryStepEffect != undefined) {
                    card.endAdversaryStepEffect();
                }

                if (card instanceof Creature) {
                    for (const e of card.equipments) {
                        if (e.endAdversaryStepEffect != undefined) {
                            e.endAdversaryStepEffect();
                        }
                    }
                }
            }
        }

        if (this.player.zone("Terrain").cards.length > 0 && this.bot.zone("Terrain").cards.length > 0) {
            this.phase = "Combat";
            this.turn = 0;

            for (const entity of [this.player, this.bot]) {
                for (const zone of entity.zones) {
                    let cpy = copy(zone.cards);
                    for (const card of cpy) {

                        if (card.startBattleEffect != undefined) {
                            card.startBattleEffect();
                        }

                        if (card instanceof Creature) {
                            for (const e of card.equipments) {
                                if (e.startBattleEffect != undefined) {
                                    e.startBattleEffect();
                                }
                            }
                        }
                    }
                }
            }

            this.nextTurn();

            if (this.system.settings.autoplay) {
                this.startAuto();
            }
        }
        else {
            this.endBattle();
        }
    };

    startAuto = () => {
        if (!this.isEndBattle()) {
            this.auto = setInterval(this.actionBattle.bind(this), this.system.settings.auto_speed);
        }
    };

    stopAuto = () => {
        clearInterval(this.auto);
        this.auto = undefined;
    };

    nextTurn = () => {
        this.turn++;
        this.fighter = undefined;

        for (const entity of [this.player, this.bot]) {
            for (const zone of entity.zones) {
                let cpy = copy(zone.cards);
                for (const card of cpy) {

                    if (card.turnEffect != undefined) {
                        card.turnEffect();
                    }

                    if (card instanceof Creature) {
                        for (const e of card.equipments) {
                            if (e.turnEffect != undefined) {
                                e.turnEffect();
                            }
                        }
                    }

                    if (card.stat("Régénération").value() > 0) {
                        card.heal(card.stat("Régénération").value());
                    }

                    if (card instanceof Creature) {
                        if (card.stat("Poison").value() > 0) {
                            card.damageByEffect(card.stat("Toxicité").value());
                            card.stat("Poison").decrease(1);
                        }
                    }

                    if (card.stat("Brûlure").value() > 0) {
                        let damage = card.stat("Brûlure").value() - card.stat("Endurance").value();
                        if (damage < 0) {
                            damage = 0;
                        }
                        card.damage(damage);
                    }
                }
            }
        }
    };

    resetAction = () => {
        for (const entity of [this.player, this.bot]) {
            for (const card of entity.zone("Terrain").cards) {
                if (card.stat("Initiative").value() < card.stat("Maîtrise").value()) {
                    card.stat("Initiative").set(card.stat("Maîtrise").value());
                }
            }
        }
    };

    actionBattle = () => {
        if (!this.isEndBattle()) {
            if (!this.isEndTurn()) {
                this.setNextFighter();
                this.fighter.play();
            }
            else if (this.turn == 5) {
                this.endTurn();
                this.endBattle();
            }
            else {
                this.endTurn();
                this.nextTurn();
            }
        }
        else {
            this.endTurn();
            this.endBattle();
        }
    };

    setNextFighter = (previous_entity: Entity | undefined = undefined) => {
        let entity: Entity = this.choiceEntity(previous_entity);

        let speed = this.getBestSpeed();
        this.fighter = undefined;
        for (let i = 0; i < entity.zone("Terrain").cards.length; i++) {
            let card = entity.zone("Terrain").cards[i];
            if (card instanceof Unit && this.fighter == undefined && (card.type != "Créature" || card.stat("Étourdissement").value() == 0) && card.stat("Initiative").value() > 0 && speed == card.stat("Vitesse").value()) {
                this.fighter = card;
            }
        }

        if (this.fighter == undefined) {
            this.setNextFighter(entity.adversary());
        }
    };

    choiceEntity = (previous_entity: Entity | undefined) => {
        if (previous_entity == undefined) {
            if (this.fighter == undefined) {
                return this.player;
            }
            else {
                return this.fighter.adversary();
            }
        }
        return previous_entity;
    };

    getBestSpeed = () => {
        let best_speed = 0;

        for (const entity of [this.player, this.bot]) {
            for (const card of entity.zone("Terrain").cards) {
                if (card.stat("Initiative").value() > 0 && (card.type != "Créature" || card.stat("Étourdissement").value() == 0) && card.stat("Vitesse").value() > best_speed) {
                    best_speed = card.stat("Vitesse").value();
                }
            }
        }

        return best_speed;
    };

    isEndTurn = () => {
        for (const entity of [this.player, this.bot]) {
            for (const card of entity.zone("Terrain").cards) {
                if (card.stat("Initiative").value() > 0 && (card.type != "Créature" || card.stat("Étourdissement").value() == 0)) {
                    return false;
                }
            }
        }

        return true;
    };

    endTurn = () => {
        this.resetAction();

        for (const entity of [this.player, this.bot]) {
            for (const zone of entity.zones) {
                let cpy = copy(zone.cards);
                for (const card of cpy) {
                    for (const stat of card.stats) {
                        stat.turn = 0;
                    }
                    for (const trait of card.traits) {
                        trait.turn = false;
                    }
                }
            }
        }
    };

    isEndBattle = () => {
        for (const entity of [this.player, this.bot]) {
            if (entity.isLoser()) {
                return true;
            }
        }
        return false;
    };

    isVictory = () => {
        if (this.bot.isLoser()) {
            return true;
        }
        return false;
    };

    endBattle = () => {
        this.phase = "Préparation";
        this.fighter = undefined;
        this.stopAuto();

        this.endStep();
    };

    endStep = () => {
        this.player.checkPerpetuite();
        this.bot.checkPerpetuite();

        for (const entity of [this.player, this.bot]) {

            entity.zone("Pile").step_level = 0;

            for (const zone of entity.zones) {
                let cpy = copy(zone.cards);
                for (const card of cpy) {
                    for (const stat of card.stats) {
                        stat.step = 0;
                    }
                    for (const trait of card.traits) {
                        trait.step = false;
                    }
                    if (card instanceof Creature && card.stat("Étourdissement").value() > 0) {
                        card.stat("Étourdissement").remove(1);
                    }
                    if (card.stat("Brûlure").value() > 0) {
                        card.stat("Brûlure").set(0);
                    }
                }
            }
        }

        this.endPhase();
    };

    endPhase = () => {
        if (this.isVictory()) {
            for (const card of this.player.zone("Terrain").cards) {
                if (card instanceof Creature) {
                    this.bot.life.current -= card.level;
                }
            }

            if (this.bot.life.current <= 0) {
                this.nextPhase();
            }
            else {
                this.startPhase();
            }
        }
        else {
            for (const card of this.bot.zone("Terrain").cards) {
                if (card instanceof Creature) {
                    this.player.life.current -= card.level;
                }
            }

            if (this.player.life.current <= 0) {
                this.defeat();
            }
            else {
                this.startPhase();
            }
        }
    };

    nextPhase = () => {
        if (this.mode == "Entraînement") {
            this.startPhase();
        }
        else {
            if (this.player.step < this.chapter.steps.length) {
                this.nextStep();
            }
            else {
                this.nextChapter();
            }
        }
    };

    nextStep = () => {
        this.player.step++;
        this.bot.step++;

        this.bot.life.set(this.chapter.steps[this.bot.step].life);

        this.bot.zone("Région").cards = [];
        this.bot.getCard(this.chapter.steps[this.bot.step].place).add("Région");
        this.bot.place = this.bot.zone("Région").cards[0];

        this.bot.deck = this.chapter.steps[this.bot.step].deck;
        for (const name of this.chapter.steps[this.bot.step].cards) {
            this.bot.getCard(name).add("Pile");
        }
        this.bot.play();

        this.startPhase();
    };

    victory = () => {
        if (this.mode == "Standard") {
            this.system.account.standard.victory++;
        }
        else if (this.mode == "Libre") {
            this.system.account.wild.victory++;
        }

        this.player.deck.victory++;

        this.system.page = "Victory";
    };

    defeat = () => {
        if (this.mode == "Standard") {
            this.system.account.standard.defeat++;
        }
        else if (this.mode == "Libre") {
            this.system.account.wild.defeat++;
        }

        this.player.deck.defeat++;

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