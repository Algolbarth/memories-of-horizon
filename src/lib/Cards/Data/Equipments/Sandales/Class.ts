import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class Sandales extends Equipment {
    name = "Sandales";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.families.base.push("Armure");

        this.equipStat("Vitesse").init(1);

        this.text = Text;
    };
};