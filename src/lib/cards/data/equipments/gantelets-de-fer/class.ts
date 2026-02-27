import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class GanteletsDeFer extends Equipment {
    name = "Gantelets de fer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 60]]);

        this.initFamily(["Armure"]);

        this.equipStat("Vitalité").init(30);
        this.equipStat("Endurance").init(15);
        this.equipStat("Maîtrise").init(1);

        this.text = Text;
    };
};