import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class RobeDeMage extends Equipment {
    name = "Robe de mage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.initFamily(["Armure", "Mage"]);

        this.equipStat("Vitalité").init(20);
        this.equipStat("Résistance").init(15);
        this.equipStat("Magie").init(10);

        this.text = Text;
    };
};