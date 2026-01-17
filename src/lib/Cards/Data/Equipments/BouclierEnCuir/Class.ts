import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class BouclierEnCuir extends Equipment {
    name = "Bouclier en cuir";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.families.base.push("Armure");

        this.equipStat("Endurance").init(5);

        this.text = Text;
    };
};