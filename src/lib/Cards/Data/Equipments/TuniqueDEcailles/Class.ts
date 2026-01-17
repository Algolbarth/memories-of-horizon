import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class TuniqueDEcailles extends Equipment {
    name = "Tunique d'écailles";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.families.base.push("Armure");

        this.equipStat("Vitalité").init(75);
        this.equipStat("Endurance").init(25);
        this.equipStat("Résistance").init(25);

        this.text = Text;
    };
};