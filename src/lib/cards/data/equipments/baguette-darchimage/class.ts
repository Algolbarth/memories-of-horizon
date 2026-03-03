import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from '$lib/cards/utils/equip-text.svelte';

export class BaguetteDArchimage extends Equipment {
    name = "Baguette d'archimage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.initFamily(["Arme", "Mage"]);

        this.equipStat("Magie").init(50);

        this.text = Text;
    };
};