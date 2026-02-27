import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class BouclierDeFer extends Equipment {
    name = "Bouclier de fer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.initFamily(["Armure"]);

        this.equipStat("Endurance").init(25);

        this.text = Text;
    };
};