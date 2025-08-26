import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipement';
import Text from '../../../Utils/EquipText.svelte';

export class BaguetteDArchimage extends Equipment {
    name = "Baguette d'archimage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);
        this.familles.base.push("Arme");

        this.equipStat("Magie").base = 50;

        this.text = Text;
    };
}