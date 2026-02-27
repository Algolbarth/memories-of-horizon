import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class RobeEnSoie extends Equipment {
    name = "Robe en soie";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.initFamily(["Armure"]);

        this.equipStat("Vitalité").init(25);
        this.equipStat("Résistance").init(12);

        this.text = Text;
    };
};