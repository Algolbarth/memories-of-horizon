import type { System } from '$lib/system/class';
import { Item } from '$lib/cards/class/item';
import Text from './text.svelte';

export class PotionDeMana extends Item {
    name = "Potion de mana";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.initFamily(["Potion"]);

        this.addStat("Infusion", 5);

        this.text = Text;
    };

    useEffect = () => {
        this.owner().ressource("Mana").produce(this.stat("Infusion").value());

        this.move("Défausse");
        this.pose();
    };
};