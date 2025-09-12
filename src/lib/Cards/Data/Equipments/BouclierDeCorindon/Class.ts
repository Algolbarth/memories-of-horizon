import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class BouclierDeCorindon extends Equipment {
    name = "Bouclier de corindon";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);
        this.familles.base.push("Armure");

        this.equipStat("Endurance").init(50);
        this.equipStat("Résistance").init(50);

        this.text = Text;
    };
}