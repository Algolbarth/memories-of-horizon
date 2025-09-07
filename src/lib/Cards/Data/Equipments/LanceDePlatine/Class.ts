import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class LanceDePlatine extends Equipment {
    name = "Lance de platine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);
        this.familles.base.push("Arme");

        this.equipStat("Attaque").base = 150;
        this.equipStat("Percée").base = 100;

        this.text = Text;
    };
}