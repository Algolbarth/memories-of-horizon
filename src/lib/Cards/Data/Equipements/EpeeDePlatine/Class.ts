import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipement';
import Text from '../../../Utils/EquipText.svelte';

export class EpeeDePlatine extends Equipment {
    name = "Épée de platine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);
        this.familles.base.push("Arme");

        this.equipStat("Attaque").base = 200;

        this.text = Text;
    };
}