import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from '$lib/cards/utils/equip-text.svelte';

export class BouclierEnCuir extends Equipment {
    name = "Bouclier en cuir";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.initFamily(["Armure"]);

        this.equipStat("Endurance").init(5);

        this.text = Text;
    };
};