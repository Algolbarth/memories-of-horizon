import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from '$lib/cards/utils/equip-text.svelte';

export class GanteletsEnCuir extends Equipment {
    name = "Gantelets en cuir";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.initFamily(["Armure"]);

        this.equipStat("Maîtrise").init(1);

        this.text = Text;
    };
};