import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class PlastronEnCuir extends Equipment {
    name = "Plastron en cuir";

    constructor(system: System) {
        super(system);

        this.init([["Or", 7]]);

        this.initFamily(["Armure"]);

        this.equipStat("Vitalité").init(10);

        this.text = Text;
    };
};