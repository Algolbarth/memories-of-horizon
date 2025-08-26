import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipement';
import Text from '../../../Utils/EquipText.svelte';

export class DoublesLamesDeCuivre extends Equipment {
    name = "Doubles lames de cuivre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);
        this.familles.base.push("Arme");

        this.equipStat("Multicoup").base = 1;

        this.text = Text;
    };
}