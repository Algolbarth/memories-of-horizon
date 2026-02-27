import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class GanteletsEnCuir extends Equipment {
    name = "Gantelets en cuir";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.initFamily(["Armure"]);

        this.equipStat("Maîtrise").init(1);

        this.text = Text;
    };
};