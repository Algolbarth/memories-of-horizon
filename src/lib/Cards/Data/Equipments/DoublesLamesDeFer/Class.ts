import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class DoublesLamesDeFer extends Equipment {
    name = "Doubles lames de fer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.families.base.push("Arme");

        this.equipStat("Force").init(10);
        this.equipStat("Agilité").init(1);

        this.text = Text;
    };
};