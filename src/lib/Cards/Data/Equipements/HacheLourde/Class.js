import { Equipment } from '../../../Class/Equipement';
import Text from '../../../Utils/Text.svelte';

export class HacheLourde extends Equipment {
    name = "Hache lourde";

    constructor(system) {
        super(system);

        this.init([["Or", 75]]);
        this.familles.base.push("Arme");

        this.equipStat("Intensité").base = 3;

        this.text = Text;
    };
}