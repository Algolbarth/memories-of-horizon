import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class BaguetteDArchimage extends Equipment {
    name = "Baguette d'archimage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.initFamily(["Arme", "Mage"]);

        this.equipStat("Magie").init(50);

        this.text = Text;
    };
};