import type { System } from '../../../../System/Class';
import type { Creature } from '../../../Class/Creature';
import { Objet } from '../../../Class/Objet';
import Text from './Text.svelte';

export class PotionDeMana extends Objet {
    name = "Potion de mana";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);
        this.familles.base.push("Potion");

        this.addStat("Infusion", 5);

        this.text = Text;
    };

    useEffect = function () {
        this.owner.ressource("Mana").current += this.stat("Infusion").value();
        this.move("Défausse");
        this.pose();
    };
}