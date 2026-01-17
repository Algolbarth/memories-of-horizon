import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class HacheDeCuivre extends Equipment {
    name = "Hache de cuivre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.families.base.push("Arme");

        this.equipStat("Adresse").init(20);

        this.text = Text;
    };
};