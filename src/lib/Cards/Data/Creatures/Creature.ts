import type { System } from '../../../System/Class';
import { Unit } from '../../Class';
import type { Equipment } from '../Equipements/Equipement';

export class Creature extends Unit {
    type = "Créature";
    equipments = [];

    constructor(system: System) {
        super(system);

        this.addStat("Attaque", 0);

        this.addStat("Maniement", 1);

        this.addStat("Percée", 0);

        this.addStat("Adresse", 0);

        this.addStat("Intensité", 2);

        this.addStat("Critique", 0);
        this.stat("Critique").current = 0;

        this.addStat("Étourdissement", 0);
        this.stat("Étourdissement").current = 0;
    };

    play = function () {
        this.stat("Actions").current--;

        this.stat("Critique").current += this.stat("Adresse").value();
        if (this.stat("Critique").current > 100) {
            this.stat("Critique").current = 100;
        }

        let defender = this.findTarget();

        this.playEffect(defender);
        for (const e of this.equipments) {
            e.playEffect(defender);
        }

        this.fight(defender);
    };

    fight = function (defender: Unit) {
        let isDie = defender.zone!.name != "Terrain";
        let repeat = this.stat("Multicoup").value();
        while (!isDie && repeat > 0) {

            this.fightEffect(defender);
            for (const e of this.equipments) {
                e.fightEffect(defender);
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
            let damage_result = defender.damage(difDamage);
            if (damage_result.die) {
                isDie = true;
                this.killEffect(defender);
                for (const card of this.equipments) {
                    card.killEffect(defender);
                }
            }

            repeat--;
        }
    };

    playEffect = function () {

    };

    fightEffect = function () {

    };

    killEffect = function () {

    };

    defend = function (attacker: Creature) {
        this.defendEffect(attacker);
        if (this.type == "Créature") {
            for (const e of this.equipments) {
                e.defendEffect(this);
            }
        }
    };

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