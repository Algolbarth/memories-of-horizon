import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class BaguetteEnBois extends Equipment {
    name = "Baguette en bois";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);
        this.families.base.push("Arme");

        this.equipStat("Magie").init(5);

        this.text = Text;
    };
}