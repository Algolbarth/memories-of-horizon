import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipement';
import Text from '../../../Utils/Text.svelte';

export class BaguetteEnBois extends Equipment {
    name = "Baguette en bois";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);
        this.familles.base.push("Arme");

        this.equipStat("Magie").base = 5;

        this.text = Text;
    };
}