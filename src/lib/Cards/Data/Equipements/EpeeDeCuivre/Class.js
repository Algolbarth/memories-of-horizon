import { Equipment } from '../Equipement';
import Text from '../Text.svelte';

export class EpeeDeCuivre extends Equipment {
    name = "Épée de cuivre";

    constructor(system) {
        super(system);

        this.init([["Or", 5]]);
        this.familles.base.push("Arme");

        this.equipStat("Attaque").base = 10;

        this.text = Text;
    };
}