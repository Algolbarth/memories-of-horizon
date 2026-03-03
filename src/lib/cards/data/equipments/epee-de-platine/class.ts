import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from '$lib/cards/utils/equip-text.svelte';

export class EpeeDePlatine extends Equipment {
    name = "Épée de platine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.initFamily(["Arme"]);

        this.equipStat("Force").init(200);

        this.text = Text;
    };
};