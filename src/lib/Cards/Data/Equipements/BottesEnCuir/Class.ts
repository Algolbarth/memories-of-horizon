import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipement';
import Text from '../../../Utils/EquipText.svelte';

export class BottesEnCuir extends Equipment {
    name = "Bottes en cuir";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);
        this.familles.base.push("Armure");

        this.equipStat("Vitesse").base = 1;

        this.text = Text;
    };
}