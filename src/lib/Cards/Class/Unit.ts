import type { System } from '../../System/Class';
import { copy } from '../../Utils';
import type { Creature } from './Creature';
import { Card } from './Class';

export class Unit extends Card {
    constructor(system: System) {
        super(system);

        this.addTrait("Inactif", false);
        this.trait("Inactif").value = function () {
            if (this.card.stat("Maîtrise").value() == 0) {
                return true;
            }
            return false;
        };

        this.addStat("Santé", 1);
        this.stat("Santé").display = () => {
            return false;
        };

        this.addStat("Vitalité", 1, 1);
        this.stat("Vitalité").display = () => {
            return false;
        };

        this.addStat("Constitution", 0);
        this.stat("Constitution").display = () => {
            return false;
        };
        this.stat("Constitution").value = () => {
            return this.stat("Vitalité").value();
        };
        this.stat("Constitution").increase = function (value: number) {
            this.card.stat("Santé").increase(value);
            this.card.stat("Vitalité").increase(value);
        };
        this.stat("Constitution").decrease = function (value: number) {
            this.card.stat("Santé").decrease(value);
            this.card.stat("Vitalité").decrease(value);
        };
        this.stat("Constitution").init = function (value: number) {
            this.card.stat("Santé").init(value);
            this.card.stat("Vitalité").init(value);
        };

        this.addStat("Garde", 0);

        this.addStat("Régénération", 0);

        this.addStat("Endurance", 0);

        this.addStat("Résistance", 0);

        this.addStat("Épine", 0);

        this.addStat("Initiative", 1);
        this.stat("Initiative").display = function () {
            if (this.card.system.game?.phase == "Combat" || this.value() != this.card.stat("Maîtrise").value()) {
                return true;
            }
            return false;
        };

        this.addStat("Maîtrise", 1);
        this.stat("Maîtrise").condition = function () {
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

        this.addStat("Brûlure", 0);
        this.stat("Brûlure").debuff = true;
    };

    canUse = () => {
        return !this.owner?.zone("Terrain").isFull();
    };

    select = () => {
        this.useEffect();
    };

    useEffect: Function = () => {
        this.move("Terrain");
        this.pose();
    };

    heal = (value: number) => {
        this.stat("Santé").increase(value);
        if (this.stat("Santé").value() > this.stat("Vitalité").value()) {
            this.stat("Santé").set(this.stat("Vitalité").value());
        }
    };

    fullHeal = () => {
        this.stat("Santé").set(this.stat("Vitalité").value());
    };

    isDamaged = () => {
        return this.stat("Santé").value() < this.stat("Vitalité").value();
    };

    damageByEffect = (value: number) => {
        value -= this.stat("Résistance").value();
        if (value < 0) {
            value = 0;
        }
        return this.damage(value);
    };

    physicalDamage = (value: number) => {
        return this.damage(value);
    };

    damage = (value: number) => {
        let result = {
            value: value,
            die: false
        };

        if (this.stat("Esquive").value() == 0) {
            if (result.value < 0) {
                result.value = 0;
            }

            if (this.stat("Garde").value() > result.value) {
                this.stat("Garde").remove(result.value);
                result.value = 0;
            }
            else {
                result.value -= this.stat("Garde").value();
                this.stat("Garde").remove(this.stat("Garde").value());
            }

            this.stat("Santé").remove(result.value);

            if (this.stat("Santé").value() <= 0) {
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

    die = () => {
        if (this.system.game) {
            this.stat("Santé").init(0);

            if (this.type == "Créature") {
                this.stat("Initiative").set(this.stat("Maîtrise").value());
            }

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
        }
    };

    dieEffect: Function | undefined;

    dieGo = () => {
        if (this.zone == undefined || this.zone.name == "Pile") {
            this.remove();
        }
        else {
            this.move("Défausse");
        }
    };

    destroy = () => {
        if (this.system.game) {
            for (const entity of [this.system.game.player, this.system.game.bot]) {
                for (const zone of entity.zones) {
                    let cpy = copy(zone.cards);
                    for (const card of cpy) {
                        if (card != this) {
                            if (card.otherDestroyEffect != undefined) {
                                card.otherDestroyEffect(this);
                            }

                            if (card.type == "Créature") {
                                for (const e of card.equipments) {
                                    if (e.otherDestroyEffect != undefined) {
                                        e.otherDestroyEffect(this);
                                    }
                                }
                            }
                        }
                    }
                }
            }

            this.die();
        }
    };

    play = () => {
        this.stat("Initiative").decrease(1);

        if (this.playEffect != undefined) {
            this.playEffect();
        }
    };

    playEffect: Function | undefined;

    defend = (attacker: Creature) => {
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

        if (this.stat("Épine").value() > 0) {
            attacker.damage(this.stat("Épine").value());
        }
    };

    defendEffect: Function | undefined;
};