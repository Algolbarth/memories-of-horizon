import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class LanceDeFer extends Equipment {
    name = "Lance de fer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);
        this.families.base.push("Arme");

        this.equipStat("Force").init(25);
        this.equipStat("Percée").init(50);

        this.text = Text;
    };
}