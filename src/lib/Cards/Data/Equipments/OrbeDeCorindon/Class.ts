import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class OrbeDeCorindon extends Equipment {
    name = "Orbe de corindon";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.families.base.push("Armure");

        this.equipStat("Résistance").init(100);

        this.text = Text;
    };
};