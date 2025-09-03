import type { System } from '../../../../System/Class';
import type { Creature } from '../../../Class/Creature';
import { Objet } from '../../../Class/Objet';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Concoction extends Objet {
    name = "Concoction";

    constructor(system: System) {
        super(system);

        this.level = 1;
        this.familles.base.push("Potion");

        this.addStat("Infusion de soin", 0);
        this.addStat("Infusion de mana", 0);
        this.addStat("Infusion de force", 0);
        this.addStat("Infusion de solidité", 0);
        this.addStat("Infusion interdite", 0);
        this.addStat("Infusion explosive", 0);

        this.trait("Rare").base = true;

        this.text = Text;
    };

    canUse = function () {
        if (this.stat("Infusion de mana").value() > 0 || this.stat("Infusion interdite").value() > 0) {
            return true;
        }
        for (const entity of [this.system.game.player, this.system.game.bot]) {
            for (const card of entity.zone("Terrain").cards) {
                if (card.type == "Créature") {
                    return true;
                }
            }
        }
        return false;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            let check = false;

            for (const entity of [this.system.game.player, this.system.game.bot]) {
                for (const card of entity.zone("Terrain").cards) {
                    if (card.type == "Créature") {
                        check = true;
                    }
                }
            }

            if (check) {
                this.system.game.use.set(this, Use);
            }
            else {
                this.useEffect(undefined);
            }

        }
        else {
            let target = undefined;

            for (const card of this.owner.zone("Terrain").cards) {
                if (target == undefined && card.type == "Créature") {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
            else {
                this.useEffect(undefined);
            }
        }
    };

    hasInfusion = function () {
        for (const stat of this.stats) {
            if (stat.name.includes("Infusion") && stat.value() > 0) {
                return true;
            }
        }
        return false;
    };

    useEffect = function (target: Creature | undefined) {
        this.owner.ressource("Mana").current += this.stat("Infusion de mana").value();

        if (this.stat("Infusion interdite").value() > 0) {
            let homonculus = this.owner.getCard("Homonculus");
            homonculus.stat("Vie").current = this.stat("Infusion interdite").value();
            homonculus.stat("Vie").base = this.stat("Infusion interdite").value();
            homonculus.stat("Attaque").base = this.stat("Infusion interdite").value();
            homonculus.add("Terrain");
        }

        if (target != undefined) {
            target.damageByEffect(this.stat("Infusion explosive").value() * 2);
            target.heal(this.stat("Infusion de soin").value() * 2);
            target.stat("Attaque").step += this.stat("Infusion de force").value() * 4;
            target.stat("Défense").step += this.stat("Infusion de solidité").value() * 2;
        }

        this.move("Défausse");
        this.pose();
    };

    infuse = function (potion: Objet) {
        if (potion.name == "Concoction") {
            for (const stat of potion.stats) {
                if (stat.name.includes("Infusion")) {
                    this.stat(stat.name).add += stat.value();
                }
            }
        }
        else {
            let infusion_name = potion.name.replace('Potion', 'Infusion');
            this.stat(infusion_name).add += potion.stat("Infusion").value();
        }
    };
}