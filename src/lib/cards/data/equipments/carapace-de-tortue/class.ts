import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class CarapaceDeTortue extends Equipment {
    name = "Carapace de tortue";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Eau", 8]]);

        this.initFamily(["Armure", "Reptile"]);
        this.equipStat("Endurance").init(15);

        this.text = Text;
    };
};