import type { System } from '../../System/Class';
import { Unit } from '.';
import type { Equipment } from './Equipement';

export class Creature extends Unit {
    type = "Créature";
    equipments: Equipment[] = [];

    constructor(system: System) {
        super(system);

        this.addTrait("Pacifiste", false);
        this.trait("Pacifiste").value = function () {
            if (this.card.stat("Multicoup").value() == 0) {
                return true;
            }
            return false;
        };

        this.addStat("Multicoup", 1);
        this.stat("Multicoup").condition = function () {
            if (this.value() > 1) {
                return true;
            }
            return false;
        };

        this.addStat("Attaque", 0);
        this.stat("Attaque").condition = function () {
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
        this.stat("Intensité").condition = function () {
            if (this.value() != 2) {
                return true;
            }
            return false;
        };

        this.addStat("Critique", 100);
        this.stat("Critique").current = 0;
        this.stat("Critique").condition = function () {
            if (this.current > 0 || this.card.stat("Adresse").value() > 0) {
                return true;
            }
            return false;
        };

        this.addStat("Étourdissement", 0);
        this.stat("Étourdissement").debuff = true;
    };

    play = function () {
        this.stat("Actions").current--;

        this.stat("Critique").current += this.stat("Adresse").value();
        if (this.stat("Critique").current > 100) {
            this.stat("Critique").current = 100;
        }

        let defender = this.findTarget();

        if (this.playEffect != undefined) {
            this.playEffect(defender);
        }
        for (const e of this.equipments) {
            if (e.playEffect != undefined) {
                e.playEffect(defender);
            }
        }

        this.fight(defender);
    };

    fight = function (defender: Unit) {
        let isDie: boolean = defender.zone!.name != "Terrain";
        let nb_hit: number = this.stat("Multicoup").value();

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

            let reduceDamage = defender.stat("Défense").value() - this.stat("Percée").value();
            if (reduceDamage < 0) {
                reduceDamage = 0;
            }
            let difDamage = this.stat("Attaque").value() - reduceDamage;
            if (this.stat("Critique").current == 100) {
                this.stat("Critique").current = 0;
                difDamage = difDamage * this.stat("Intensité").value();
            }
            if (difDamage < 0) {
                difDamage = 0;
            }

            let damage_result = defender.physicalDamage(difDamage);

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

    findTarget = function () {
        let target = undefined;
        for (const card of this.owner.adversary().zone("Terrain").cards) {
            if (target == undefined || card.stat("Protection").value() > target.stat("Protection").value()) {
                target = card;
            }
        }
        return target;
    };

    canEquip = function () {
        if (this.equipments.length < this.stat("Maniement").value()) {
            return true;
        }
        return false;
    };

    equip = function (equipment: Equipment) {
        equipment.remove();
        this.equipments.push(equipment);
        equipment.bearer = this;

        this.owner.ressource("Mana").current += equipment.equipStat("Magie").value();
        this.owner.ressource("Mana").max += equipment.equipStat("Magie").value();
    };
}