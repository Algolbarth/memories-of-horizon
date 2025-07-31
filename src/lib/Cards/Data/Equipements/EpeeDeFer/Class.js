import { Equipment } from '../../../Class/Equipement';
import Text from '../../../Utils/Text.svelte';

export class EpeeDeFer extends Equipment {
    name = "Épée de fer";

    constructor(system) {
        super(system);

        this.init([["Or", 25]]);
        this.familles.base.push("Arme");

        this.equipStat("Attaque").base = 50;

        this.text = Text;
    };
}