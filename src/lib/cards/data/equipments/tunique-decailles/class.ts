import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class TuniqueDEcailles extends Equipment {
    name = "Tunique d'écailles";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.initFamily(["Armure"]);

        this.equipStat("Vitalité").init(75);
        this.equipStat("Endurance").init(25);
        this.equipStat("Résistance").init(25);

        this.text = Text;
    };
};