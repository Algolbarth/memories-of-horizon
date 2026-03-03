import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from '$lib/cards/utils/equip-text.svelte';

export class GanteletsDeFer extends Equipment {
    name = "Gantelets de fer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 60]]);

        this.initFamily(["Armure"]);

        this.equipStat("Vitalité").init(30);
        this.equipStat("Endurance").init(15);
        this.equipStat("Maîtrise").init(1);

        this.text = Text;
    };
};