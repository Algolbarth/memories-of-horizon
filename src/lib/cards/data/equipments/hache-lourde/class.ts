import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class HacheLourde extends Equipment {
    name = "Hache lourde";

    constructor(system: System) {
        super(system);

        this.init([["Or", 75]]);

        this.initFamily(["Arme"]);

        this.equipStat("Intensité").init(3);

        this.text = Text;
    };
};