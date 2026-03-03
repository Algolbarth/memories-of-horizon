import type { System } from '$lib/system/class';
import { Item } from '$lib/cards/class/item';
import Text from './text.svelte';

export class PotionInterdite extends Item {
    name = "Potion interdite";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.initFamily(["Potion"]);

        this.addStat("Infusion", 5);

        this.text = Text;
    };

    useEffect = () => {
        let homonculus = this.owner().getCard("Homonculus");

        homonculus.stat("Constitution").init(this.stat("Infusion").value());
        homonculus.stat("Force").init(this.stat("Infusion").value());

        homonculus.add("Terrain");
        this.move("Défausse");
        this.pose();
    };
};