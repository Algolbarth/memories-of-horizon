import type { Creature } from "../Cards/Class/Creature";
import type { System } from "../System/Class";
import { copy } from "../Utils";
import { Entity } from "./Entity";

export class Battle {
    fighter: Creature | undefined = undefined;
    auto = null;
    system: System;
    turn: number = 1;

    constructor(system: System) {
        this.system = system;
    }

    isBattle = function () {
        if (this.phase == "Combat") {
            return true;
        }
        return false;
    };

    newBattle = function () {
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

    startAuto = function () {
        if (!this.isEndBattle()) {
            this.auto = setInterval(this.actionBattle.bind(this), this.system.settings.auto_speed);
        }
    };

    stopAuto = function () {
        clearInterval(this.auto);
        this.auto = null;
    };

    nextTurn = function () {
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

    resetAction = function () {
        for (const card of this.player.zone("Terrain").cards) {
            card.stat("Actions").current = card.stat("Actions").value();
        }
        for (const card of this.bot.zone("Terrain").cards) {
            card.stat("Actions").current = card.stat("Actions").value();
        }
    };

    actionBattle = function () {
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

    nextFighter = function (previousCamp = undefined) {
        let camp: Entity = this.choiceCamp(previousCamp);

        let speed = this.bestSpeed();
        this.fighter = undefined;
        for (let i = 0; i < camp.zone("Terrain").cards.length; i++) {
            let card = camp.zone("Terrain").cards[i];
            if (this.fighter == undefined && card.stat("Étourdissement").value() == 0 && card.stat("Actions").current > 0 && speed == card.stat("Vitesse").value()) {
                this.fighter = card;
            }
        }

        if (this.fighter == undefined) {
            this.nextFighter(camp.adversary());
        }
    };

    choiceCamp = function (previousCamp: Entity | undefined) {
        if (previousCamp == undefined) {
            if (this.fighter == undefined) {
                return this.player;
            }
            else {
                return this.fighter.owner.adversary();
            }
        }
        return previousCamp;
    };

    bestSpeed = function () {
        let best = 0;

        for (const card of this.player.zone("Terrain").cards) {
            if (card.stat("Actions").current > 0 && card.stat("Étourdissement").value() == 0 && card.stat("Vitesse").value() > best) {
                best = card.stat("Vitesse").value();
            }
        }
        for (const card of this.bot.zone("Terrain").cards) {
            if (card.stat("Actions").current > 0 && card.stat("Étourdissement").value() == 0 && card.stat("Vitesse").value() > best) {
                best = card.stat("Vitesse").value();
            }
        }

        return best;
    };

    isEndTurn = function () {
        for (const card of this.player.zone("Terrain").cards) {
            if (card.stat("Actions").current > 0 && card.stat("Étourdissement").value() == 0) {
                return false;
            }
        }
        for (const card of this.bot.zone("Terrain").cards) {
            if (card.stat("Actions").current > 0 && card.stat("Étourdissement").value() == 0) {
                return false;
            }
        }
        return true;
    };

    endTurn = function () {
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

    isEndBattle = function () {
        if (this.player.zone("Terrain").cards.length == 0) {
            return true;
        }
        if (this.bot.zone("Terrain").cards.length == 0) {
            return true;
        }
        return false;
    };

    isVictory = function () {
        if (this.bot.zone("Terrain").cards.length == 0) {
            return true;
        }
    };

    endBattle = function () {
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