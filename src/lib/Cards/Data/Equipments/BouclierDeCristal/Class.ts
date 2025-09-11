import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class BouclierDeCristal extends Equipment {
    name = "Bouclier de cristal";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);
        this.familles.base.push("Armure");

        this.equipStat("Endurance").base = 15;
        this.equipStat("Résistance").base = 15;

        this.text = Text;
    };
}