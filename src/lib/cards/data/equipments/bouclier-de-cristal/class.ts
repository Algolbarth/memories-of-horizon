import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

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