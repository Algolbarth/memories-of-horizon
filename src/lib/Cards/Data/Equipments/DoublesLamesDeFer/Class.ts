import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class DoublesLamesDeFer extends Equipment {
    name = "Doubles lames de fer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.familles.base.push("Arme");

        this.equipStat("Force").base = 10;
        this.equipStat("Agilité").base = 1;

        this.text = Text;
    };
}