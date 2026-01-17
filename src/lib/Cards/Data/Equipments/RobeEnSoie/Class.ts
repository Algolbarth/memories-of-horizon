import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class RobeEnSoie extends Equipment {
    name = "Robe en soie";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.families.base.push("Armure");

        this.equipStat("Vitalité").init(25);
        this.equipStat("Résistance").init(12);

        this.text = Text;
    };
};