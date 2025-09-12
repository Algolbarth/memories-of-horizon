import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class BaguetteDeMage extends Equipment {
    name = "Baguette de mage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);
        this.familles.base.push("Arme");

        this.equipStat("Magie").init(15);

        this.text = Text;
    };
}