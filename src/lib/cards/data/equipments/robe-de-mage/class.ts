import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from '$lib/cards/utils/equip-text.svelte';

export class RobeDeMage extends Equipment {
    name = "Robe de mage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.initFamily(["Armure", "Mage"]);

        this.equipStat("Vitalité").init(20);
        this.equipStat("Résistance").init(15);
        this.equipStat("Magie").init(10);

        this.text = Text;
    };
};