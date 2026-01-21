import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class EpeeDeCuivre extends Equipment {
    name = "Épée de cuivre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.initFamily(["Arme"]);

        this.equipStat("Force").init(10);

        this.text = Text;
    };
};