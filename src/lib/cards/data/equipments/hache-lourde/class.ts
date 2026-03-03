import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from '$lib/cards/utils/equip-text.svelte';

export class HacheLourde extends Equipment {
    name = "Hache lourde";

    constructor(system: System) {
        super(system);

        this.init([["Or", 75]]);

        this.initFamily(["Arme"]);

        this.equipStat("Intensité").init(3);

        this.text = Text;
    };
};