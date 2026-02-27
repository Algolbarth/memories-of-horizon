import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class RobeDeVelours extends Equipment {
    name = "Robe de velours";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.initFamily(["Armure"]);

        this.equipStat("Vitalité").init(75);
        this.equipStat("Résistance").init(50);

        this.text = Text;
    };
};