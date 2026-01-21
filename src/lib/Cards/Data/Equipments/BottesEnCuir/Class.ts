import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class BottesEnCuir extends Equipment {
    name = "Bottes en cuir";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.initFamily(["Armure"]);

        this.equipStat("Vitesse").init(3);

        this.text = Text;
    };
};