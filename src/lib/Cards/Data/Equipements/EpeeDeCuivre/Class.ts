import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipement';
import Text from '../../../Utils/Text.svelte';

export class EpeeDeCuivre extends Equipment {
    name = "Épée de cuivre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);
        this.familles.base.push("Arme");

        this.equipStat("Attaque").base = 10;

        this.text = Text;
    };
}