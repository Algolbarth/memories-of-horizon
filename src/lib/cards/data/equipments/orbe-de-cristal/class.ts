import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class OrbeDeCristal extends Equipment {
    name = "Orbe de cristal";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.initFamily(["Armure"]);

        this.equipStat("Résistance").init(25);

        this.text = Text;
    };
};