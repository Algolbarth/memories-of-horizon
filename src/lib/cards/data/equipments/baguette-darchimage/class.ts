import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

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