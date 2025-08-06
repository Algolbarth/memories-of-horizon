import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipement';
import Text from '../../../Utils/Text.svelte';

export class HacheDeFer extends Equipment {
    name = "Hache de fer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);
        this.familles.base.push("Arme");

        this.equipStat("Adresse").base = 30;
        this.equipStat("Intensité").base = 1;

        this.text = Text;
    };
}