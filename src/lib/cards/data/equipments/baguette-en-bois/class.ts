import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from '$lib/cards/utils/equip-text.svelte';

export class BaguetteEnBois extends Equipment {
    name = "Baguette en bois";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.initFamily(["Arme"]);

        this.equipStat("Magie").init(5);

        this.text = Text;
    };
};