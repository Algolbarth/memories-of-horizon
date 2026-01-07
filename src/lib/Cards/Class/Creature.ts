import type { System } from '../../System/Class';
import { Unit } from '.';
import type { Equipment } from './Equipment';

export class Creature extends Unit {
    type = "Créature";
    equipments: Equipment[] = [];

    constructor(system: System) {
        super(system);

        this.addTrait("Pacifiste", false);
        this.trait("Pacifiste").value = function () {
            if (this.card.stat("Agilité").value() == 0) {
                return true;
            }
            return false;
        };

        this.addStat("Agilité", 1);
        this.stat("Agilité").condition = function () {
            if (this.value() > 1) {
                return true;
            }
            return false;
        };

        this.addStat("Force", 0);
        this.stat("Force").display = function () {
            return true;
        };

        this.addStat("Maniement", 1);
        this.stat("Maniement").condition = function () {
            if (this.value() > 1) {
                return true;
            }
            return false;
        };

        this.addStat("Percée", 0);

        this.addStat("Adresse", 0);

        this.addStat("Intensité", 2);
        this.stat("Intensité").display = function () {
            if (this.value() != 2 || this.card.stat("Adresse").value() > 0 || this.card.stat("Critique").value() > 0) {
                return true;
            }
            return false;
        };

        this.addStat("Critique", 0);
        this.stat("Critique").display = function () {
            if (this.condition() || this.card.stat("Adresse").value() > 0) {
                return true;
            }
            return false;
        };

        this.addStat("Étourdissement", 0);
        this.stat("Étourdissement").debuff = true;

        this.addStat("Poison", 0);
        this.stat("Poison").debuff = true;

        this.addStat("Toxicité", 1, 1);
        this.stat("Toxicité").debuff = true;
        this.stat("Toxicité").display = function () {
            if (this.condition() || this.card.stat("Poison").value() > 0) {
                return true;
            }
            return false;
        };
    };

    play = () => {
        this.stat("Initiative").decrease(1);

        this.stat("Critique").increase(this.stat("Adresse").value());
        if (this.stat("Critique").value() > 100) {
            this.stat("Critique").set(100);
        }

        if (this.playEffect != undefined) {
            this.playEffect();
        }
        for (const e of this.equipments) {
            if (e.playEffect != undefined) {
                e.playEffect();
            }
        }

        let defender: Unit | undefined = this.findTarget();

        if (defender != undefined) {
            this.fight(defender);
        }
    };

    fight = (defender: Unit) => {
        let isDie: boolean = defender.zone!.name != "Terrain";
        let nb_hit: number = this.stat("Agilité").value();

        while (!isDie && nb_hit > 0) {

            if (this.fightEffect != undefined) {
                this.fightEffect(defender);
            }
            for (const e of this.equipments) {
                if (e.fightEffect != undefined) {
                    e.fightEffect(defender);
                }
            }

            defender.defend(this);

            let damage = this.stat("Force").value();

            if (this.stat("Critique").value() == 100) {
                this.stat("Critique").remove(100);
                damage = damage * this.stat("Intensité").value();
            }

            let damage_reduction = defender.stat("Endurance").value() - this.stat("Percée").value();
            if (damage_reduction < 0) {
                damage_reduction = 0;
            }

            damage -= damage_reduction;
            if (damage < 0) {
                damage = 0;
            }

            let damage_result = defender.physicalDamage(damage);

            if (damage_result.die) {
                isDie = true;

                if (this.killEffect != undefined) {
                    this.killEffect(defender);
                }
                for (const e of this.equipments) {
                    if (e.killEffect != undefined) {
                        e.killEffect(defender);
                    }
                }
            }

            nb_hit--;
        }
    };

    playEffect: Function | undefined;

    fightEffect: Function | undefined;

    killEffect: Function | undefined;

    findTarget = () => {
        let target: Unit | undefined = undefined;
        for (const card of this.owner.adversary().zone("Terrain").cards) {
            if (target == undefined || card.stat("Protection").value() > target.stat("Protection").value()) {
                target = card;
            }
        }
        return target;
    };

    canEquip = () => {
        if (this.equipments.length < this.stat("Maniement").value()) {
            return true;
        }
        return false;
    };

    equip = (equipment: Equipment) => {
        equipment.remove();
        this.equipments.push(equipment);
        equipment.bearer = this;

        this.owner.ressource("Mana").current += equipment.equipStat("Magie").value();
        this.owner.ressource("Mana").production += equipment.equipStat("Magie").value();
    };
};