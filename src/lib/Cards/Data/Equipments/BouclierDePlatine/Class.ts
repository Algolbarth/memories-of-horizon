import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class BouclierDePlatine extends Equipment {
    name = "Bouclier de platine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);
        this.familles.base.push("Armure");

        this.equipStat("Endurance").base = 100;

        this.text = Text;
    };
}