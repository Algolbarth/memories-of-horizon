import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from '$lib/cards/utils/equip-text.svelte';

export class HacheDeFer extends Equipment {
    name = "Hache de fer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.initFamily(["Arme"]);

        this.equipStat("Adresse").init(35);
        this.equipStat("Intensité").init(1);

        this.text = Text;
    };
};