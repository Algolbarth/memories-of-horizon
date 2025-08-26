import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipement';
import Text from '../../../Utils/EquipText.svelte';

export class HacheLourde extends Equipment {
    name = "Hache lourde";

    constructor(system: System) {
        super(system);

        this.init([["Or", 75]]);
        this.familles.base.push("Arme");

        this.equipStat("Intensité").base = 3;

        this.text = Text;
    };
}