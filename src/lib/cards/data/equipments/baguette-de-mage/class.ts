import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from '$lib/cards/utils/equip-text.svelte';

export class BaguetteDeMage extends Equipment {
    name = "Baguette de mage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.initFamily(["Arme", "Mage"]);

        this.equipStat("Magie").init(15);

        this.text = Text;
    };
};