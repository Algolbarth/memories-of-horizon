import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class BouclierEnCuir extends Equipment {
    name = "Bouclier en cuir";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.initFamily(["Armure"]);

        this.equipStat("Endurance").init(5);

        this.text = Text;
    };
};