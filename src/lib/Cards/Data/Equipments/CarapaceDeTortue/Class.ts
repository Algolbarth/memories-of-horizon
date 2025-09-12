import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class CarapaceDeTortue extends Equipment {
    name = "Carapace de tortue";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Eau", 8]]);
        this.familles.base.push("Armure", "Reptile");
        this.equipStat("Endurance").init(15);

        this.text = Text;
    };
}