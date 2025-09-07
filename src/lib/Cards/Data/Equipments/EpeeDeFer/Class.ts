import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class EpeeDeFer extends Equipment {
    name = "Épée de fer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);
        this.familles.base.push("Arme");

        this.equipStat("Attaque").base = 50;

        this.text = Text;
    };
}