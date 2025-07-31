import { Equipment } from '../../../Class/Equipement';
import Text from '../../../Utils/Text.svelte';

export class CarapaceDeTortue extends Equipment {
    name = "Carapace de tortue";

    constructor(system) {
        super(system);

        this.init([["Or", 8], ["Eau", 8]]);
        this.familles.base.push("Armure", "Reptile");
        this.equipStat("Défense").base = 15;

        this.text = Text;
    };
}