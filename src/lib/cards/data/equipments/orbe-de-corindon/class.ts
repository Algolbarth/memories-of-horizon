import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class OrbeDeCorindon extends Equipment {
    name = "Orbe de corindon";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.initFamily(["Armure"]);

        this.equipStat("Résistance").init(100);

        this.text = Text;
    };
};