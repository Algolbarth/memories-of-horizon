import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from '$lib/cards/utils/equip-text.svelte';

export class EpeeDeCuivre extends Equipment {
    name = "Épée de cuivre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.initFamily(["Arme"]);

        this.equipStat("Force").init(10);

        this.text = Text;
    };
};