import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class LanceDePlatine extends Equipment {
    name = "Lance de platine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);
        this.families.base.push("Arme");

        this.equipStat("Force").init(150);
        this.equipStat("Percée").init(100);

        this.text = Text;
    };
}