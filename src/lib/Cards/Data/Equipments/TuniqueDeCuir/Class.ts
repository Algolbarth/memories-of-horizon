import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class TuniqueDeCuir extends Equipment {
    name = "Tunique de cuir";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.families.base.push("Armure");

        this.equipStat("Vitalité").init(20);
        this.equipStat("Endurance").init(8);
        this.equipStat("Résistance").init(8);

        this.text = Text;
    };
};