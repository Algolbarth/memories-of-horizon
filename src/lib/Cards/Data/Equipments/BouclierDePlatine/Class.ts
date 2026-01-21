import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class BouclierDePlatine extends Equipment {
    name = "Bouclier de platine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.initFamily(["Armure"]);

        this.equipStat("Endurance").init(100);

        this.text = Text;
    };
};