import type { Creature } from "../Cards/Class/Creature";
import type { System } from "../System/Class";
import { copy } from "../Utils";
import { Entity } from "./Entity";

export class Battle {
    fighter: Creature | undefined = undefined;
    auto = null;
    system: System;
    turn: number = 1;
    phase: string = "Préparation";
    player: Entity;
    bot: Entity;

    constructor(system: System) {
        this.system = system;
        this.player = new Entity(this.system);
        this.bot = new Entity(this.system);
    }

    isBattle = () => {
        if (this.phase == "Combat") {
            return true;
        }
        return false;
    };

    newBattle = () => {
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

                        if (card.type == "Créature") {
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
        this.auto = null;
    };

    nextTurn = () => {
        this.turn++;
        this.fighter = undefined;

        this.resetAction();

        for (const entity of [this.player, this.bot]) {
            for (const zone of entity.zones) {
                let cpy = copy(zone.cards);
                for (const card of cpy) {

                    if (card.turnEffect != undefined) {
                        card.turnEffect();
                    }

                    if (card.type == "Créature") {
                        for (const e of card.equipments) {
                            if (e.turnEffect != undefined) {
                                e.turnEffect();
                            }
                        }
                    }
                }
            }
        }
    };

    resetAction = () => {
        for (const entity of [this.player, this.bot]) {
            for (const card of entity.zone("Terrain").cards) {
                card.stat("Initiative").set(card.stat("Maîtrise").value());
            }
        }
    };

    actionBattle = () => {
        if (!this.isEndBattle()) {
            if (!this.isEndTurn()) {
                this.nextFighter();
                this.fighter.play();
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

    nextFighter = (previous_entity = undefined) => {
        let entity: Entity = this.choiceEntity(previous_entity);

        let speed = this.getBestSpeed();
        this.fighter = undefined;
        for (let i = 0; i < entity.zone("Terrain").cards.length; i++) {
            let card = entity.zone("Terrain").cards[i];
            if (this.fighter == undefined && (card.type != "Créature" || card.stat("Étourdissement").value() == 0) && card.stat("Initiative").value() > 0 && speed == card.stat("Vitesse").value()) {
                this.fighter = card;
            }
        }

        if (this.fighter == undefined) {
            this.nextFighter(entity.adversary());
        }
    };

    choiceEntity = (previous_entity: Entity | undefined) => {
        if (previous_entity == undefined) {
            if (this.fighter == undefined) {
                return this.player;
            }
            else {
                return this.fighter.owner.adversary();
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
    }

    isEndBattle = () => {
        if (this.player.zone("Terrain").cards.length == 0) {
            return true;
        }
        if (this.bot.zone("Terrain").cards.length == 0) {
            return true;
        }
        return false;
    };

    isVictory = () => {
        if (this.bot.zone("Terrain").cards.length == 0) {
            return true;
        }
    };

    endBattle = () => {
        this.phase = "Préparation";
        this.fighter = undefined;

        this.stopAuto();
        this.endStep();

        if (this.isVictory()) {
            this.nextStep();
        }
        else {
            for (const card of this.bot.zone("Terrain").cards) {
                if (card.type == "Créature") {
                    this.player.life.current -= card.level;
                }
            }

            if (this.player.life.current <= 0) {
                this.defeat();
            }
            else {
                this.startStep();
            }
        }
    };
}