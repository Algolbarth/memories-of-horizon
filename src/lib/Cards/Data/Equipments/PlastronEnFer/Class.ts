import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class PlastronEnFer extends Equipment {
    name = "Plastron en fer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);
        this.familles.base.push("Armure");

        this.equipStat("Vitalité").base = 45;

        this.text = Text;
    };
}