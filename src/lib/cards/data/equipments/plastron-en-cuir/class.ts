import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class PlastronEnCuir extends Equipment {
    name = "Plastron en cuir";

    constructor(system: System) {
        super(system);

        this.init([["Or", 7]]);

        this.initFamily(["Armure"]);

        this.equipStat("Vitalité").init(10);

        this.text = Text;
    };
};