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

        this.trait("Rare").base = true;

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
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
        }
    };

    useEffect = function (target: Creature) {
        target.heal(this.stat("Infusion de soin").value() * 2);
        this.owner.ressource("Mana").current += this.stat("Infusion de mana").value();
        target.stat("Attaque").step += this.stat("Infusion de force").value() * 4;
        target.stat("Défense").step += this.stat("Infusion de solidité").value() * 2;

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