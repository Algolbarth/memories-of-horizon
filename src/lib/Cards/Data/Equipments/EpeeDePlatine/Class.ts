import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class EpeeDePlatine extends Equipment {
    name = "Épée de platine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.families.base.push("Arme");

        this.equipStat("Force").init(200);

        this.text = Text;
    };
};