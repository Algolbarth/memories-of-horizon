import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class CapeDeCuir extends Equipment {
    name = "Cape de cuir";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);
        this.familles.base.push("Armure");

        this.equipStat("Résistance").base = 25;

        this.text = Text;
    };
}