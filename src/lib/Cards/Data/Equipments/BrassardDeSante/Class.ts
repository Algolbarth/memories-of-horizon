import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class BrassardDeSante extends Equipment {
    name = "Brassard de santé";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.families.base.push("Armure");

        this.equipStat("Régénération").init(20);

        this.text = Text;
    };
};