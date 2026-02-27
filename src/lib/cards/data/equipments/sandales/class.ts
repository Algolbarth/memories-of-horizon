import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class Sandales extends Equipment {
    name = "Sandales";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.initFamily(["Armure"]);

        this.equipStat("Vitesse").init(1);

        this.text = Text;
    };
};