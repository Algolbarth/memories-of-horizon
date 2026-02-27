import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class LanceDePlatine extends Equipment {
    name = "Lance de platine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.initFamily(["Arme"]);

        this.equipStat("Force").init(150);
        this.equipStat("Percée").init(100);

        this.text = Text;
    };
};