import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class PlastronEnPlatine extends Equipment {
    name = "Plastron en platine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);
        this.familles.base.push("Armure");

        this.equipStat("Santé").base = 150;

        this.text = Text;
    };
}