import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from '$lib/cards/utils/equip-text.svelte';

export class BouclierDeCristal extends Equipment {
    name = "Bouclier de cristal";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.initFamily(["Armure"]);

        this.equipStat("Endurance").init(15);
        this.equipStat("Résistance").init(15);

        this.text = Text;
    };
};