import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipement';
import Text from '../../../Utils/EquipText.svelte';

export class PlastronEnCuir extends Equipment {
    name = "Plastron en cuir";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);
        this.familles.base.push("Armure");

        this.equipStat("Vie").base = 8;

        this.text = Text;
    };
}