import { Equipment } from '../Equipement';
import Text from '../Text.svelte';

export class DoublesLamesDeCuivre extends Equipment {
    name = "Doubles lames de cuivre";

    constructor(system) {
        super(system);

        this.init([["Or", 20]]);
        this.familles.base.push("Arme");

        this.equipStat("Multicoup").base = 1;

        this.text = Text;
    };
}