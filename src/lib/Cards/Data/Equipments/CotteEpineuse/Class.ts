import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class CotteEpineuse extends Equipment {
    name = "Cotte épineuse";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);
        this.families.base.push("Armure");

        this.equipStat("Vitalité").init(20);
        this.equipStat("Endurance").init(10);
        this.equipStat("Épine").init(10);

        this.text = Text;
    };
};