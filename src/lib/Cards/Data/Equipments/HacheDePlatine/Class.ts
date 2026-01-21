import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class HacheDePlatine extends Equipment {
    name = "Hache de platine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.initFamily(["Arme"]);

        this.equipStat("Adresse").init(50);
        this.equipStat("Intensité").init(2);

        this.text = Text;
    };
};