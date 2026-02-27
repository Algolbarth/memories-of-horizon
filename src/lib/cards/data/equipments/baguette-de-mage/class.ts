import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class BaguetteDeMage extends Equipment {
    name = "Baguette de mage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.initFamily(["Arme", "Mage"]);

        this.equipStat("Magie").init(15);

        this.text = Text;
    };
};