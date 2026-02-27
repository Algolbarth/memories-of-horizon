import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class BouclierDeCorindon extends Equipment {
    name = "Bouclier de corindon";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.initFamily(["Armure"]);

        this.equipStat("Endurance").init(50);
        this.equipStat("Résistance").init(50);

        this.text = Text;
    };
};