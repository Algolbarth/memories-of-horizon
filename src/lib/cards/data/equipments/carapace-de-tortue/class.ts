import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from '$lib/cards/utils/equip-text.svelte';

export class CarapaceDeTortue extends Equipment {
    name = "Carapace de tortue";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Eau", 8]]);

        this.initFamily(["Armure", "Reptile"]);
        this.equipStat("Endurance").init(15);

        this.text = Text;
    };
};