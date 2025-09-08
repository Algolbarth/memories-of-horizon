import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class BouclierDeFer extends Equipment {
    name = "Bouclier de fer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);
        this.familles.base.push("Armure");

        this.equipStat("Endurance").base = 25;

        this.text = Text;
    };
}