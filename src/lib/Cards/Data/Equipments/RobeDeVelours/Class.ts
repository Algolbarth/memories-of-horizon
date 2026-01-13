import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class RobeDeVelours extends Equipment {
    name = "Robe de velours";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);
        this.families.base.push("Armure");

        this.equipStat("Vitalité").init(75);
        this.equipStat("Résistance").init(50);

        this.text = Text;
    };
}