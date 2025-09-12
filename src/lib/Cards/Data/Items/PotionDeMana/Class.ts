import type { System } from '../../../../System/Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';

export class PotionDeMana extends Item {
    name = "Potion de mana";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);
        this.familles.base.push("Potion");

        this.addStat("Infusion", 5);

        this.text = Text;
    };

    useEffect = () => {
        this.owner.ressource("Mana").current += this.stat("Infusion").value();
        this.move("Défausse");
        this.pose();
    };
}