import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class TuniqueDeCuir extends Equipment {
    name = "Tunique de cuir";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.initFamily(["Armure"]);

        this.equipStat("Vitalité").init(20);
        this.equipStat("Endurance").init(8);
        this.equipStat("Résistance").init(8);

        this.text = Text;
    };
};