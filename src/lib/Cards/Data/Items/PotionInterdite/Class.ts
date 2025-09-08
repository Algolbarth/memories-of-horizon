import type { System } from '../../../../System/Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';

export class PotionInterdite extends Item {
    name = "Potion interdite";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);
        this.familles.base.push("Potion");

        this.addStat("Infusion", 5);

        this.text = Text;
    };

    useEffect = function () {
        let homonculus = this.owner.getCard("Homonculus");

        homonculus.stat("Santé").current = this.stat("Infusion").value();
        homonculus.stat("Santé").base = this.stat("Infusion").value();
        homonculus.stat("Force").base = this.stat("Infusion").value();
        
        homonculus.add("Terrain");
        this.move("Défausse");
        this.pose();
    };
}