import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class CotteEpineuse extends Equipment {
    name = "Cotte épineuse";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.initFamily(["Armure"]);

        this.equipStat("Vitalité").init(20);
        this.equipStat("Endurance").init(10);
        this.equipStat("Épine").init(10);

        this.text = Text;
    };
};