import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class DoublesLamesDeFer extends Equipment {
    name = "Doubles lames de fer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.initFamily(["Arme"]);

        this.equipStat("Force").init(10);
        this.equipStat("Agilité").init(1);

        this.text = Text;
    };
};