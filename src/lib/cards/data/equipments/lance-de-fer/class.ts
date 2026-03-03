import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from '$lib/cards/utils/equip-text.svelte';

export class LanceDeFer extends Equipment {
    name = "Lance de fer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.initFamily(["Arme"]);

        this.equipStat("Force").init(25);
        this.equipStat("Percée").init(50);

        this.text = Text;
    };
};