import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from '$lib/cards/utils/equip-text.svelte';

export class HacheDePlatine extends Equipment {
    name = "Hache de platine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.initFamily(["Arme"]);

        this.equipStat("Adresse").init(50);
        this.equipStat("Intensité").init(2);

        this.text = Text;
    };
};