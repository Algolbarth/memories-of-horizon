import type { System } from '../../System/Class';
import { copy } from '../../Utils';
import type { Creature } from './Creature';
import { Card } from './Class';

export class Unit extends Card {
    constructor(system: System) {
        super(system);

        this.addTrait("Inactif", false);
        this.trait("Inactif").value = function () {
            if (this.card.stat("Actions").value() == 0) {
                return true;
            }
            return false;
        };

        this.addStat("Vie", 1, 1);
        this.stat("Vie").current = 1;
        this.stat("Vie").condition = function () {
            return true;
        };

        this.addStat("Défense", 0);

        this.addStat("Garde", 0);

        this.addStat("Actions", 1);
        this.stat("Actions").current = 1;
        this.stat("Actions").condition = function () {
            if (this.value() > 1) {
                return true;
            }
            return false;
        };

        this.addStat("Vitesse", 0);

        this.addStat("Protection", 0);

        this.addStat("Esquive", 0);

        this.addStat("Magie", 0);

        this.addStat("Intelligence", 0);
    };

    use = function () {
        if (!this.owner.zone("Terrain").isFull()) {
            this.select();
        }
    };

    select = function () {
        this.useEffect();
    };

    useEffect: Function = function () {
        this.move("Terrain");
        this.pose();
    };

    heal = function (value: number) {
        this.stat("Vie").current += value;
        if (this.stat("Vie").current > this.stat("Vie").value()) {
            this.stat("Vie").current = this.stat("Vie").value();
        }
    };

    fullHeal = function () {
        this.stat("Vie").current = this.stat("Vie").value();
    };

    isDamaged = function () {
        return this.stat("Vie").current < this.stat("Vie").value();
    };

    damage = function (value: number) {
        let result = {
            value: value,
            die: false
        }

        if (this.stat("Esquive").value() == 0) {
            if (this.stat("Garde").value() > result.value) {
                this.stat("Garde").remove(result.value);
                result.value = 0;
            }
            else {
                result.value -= this.stat("Garde").value();
                this.stat("Garde").remove(this.stat("Garde").value());
            }

            this.stat("Vie").current -= result.value;

            if (this.stat("Vie").current <= 0) {
                result.die = true;
                this.die();
            }
        }
        else {
            result.value = 0;
            this.stat("Esquive").remove(1);
        }

        return result;
    };

    die = function () {
        this.stat("Vie").current = 0;

        if (this.dieEffect != undefined) {
            this.dieEffect();
        }

        for (const entity of [this.system.game.player, this.system.game.bot]) {
            for (const zone of entity.zones) {
                let cpy = copy(zone.cards);
                for (const card of cpy) {
                    if (card != this) {
                        if (card.otherDieEffect != undefined) {
                            card.otherDieEffect(this);
                        }

                        if (card.type == "Créature") {
                            for (const e of card.equipments) {
                                if (e.otherDieEffect != undefined) {
                                    e.otherDieEffect(this);
                                }
                            }
                        }
                    }
                }
            }
        }

        this.dieGo();
    };

    dieGo = function () {
        this.move("Défausse");
    };

    destroy = function () {
        if (!this.trait("Légendaire").value()) {
            this.die();
        }
    };

    play = function () {
        this.stat("Actions").current--;

        if (this.playEffect != undefined) {
            this.playEffect();
        }
    };

    defend = function (attacker: Creature) {
        if (this.defendEffect != undefined) {
            this.defendEffect(attacker);
        }
        if (this.type == "Créature") {
            for (const e of this.equipments) {
                if (e.defendEffect != undefined) {
                    e.defendEffect(this);
                }
            }
        }
    };

    defendEffect: Function | undefined;
}