import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class GanteletsEnCuir extends Equipment {
    name = "Gantelets en cuir";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.families.base.push("Armure");

        this.equipStat("Maîtrise").init(1);

        this.text = Text;
    };
}