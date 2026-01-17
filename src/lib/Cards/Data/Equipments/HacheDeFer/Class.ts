import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class HacheDeFer extends Equipment {
    name = "Hache de fer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.families.base.push("Arme");

        this.equipStat("Adresse").init(35);
        this.equipStat("Intensité").init(1);

        this.text = Text;
    };
};