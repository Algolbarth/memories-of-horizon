import { Equipment } from '../Equipement';
import Text from '../Text.svelte';

export class DoublesHachettesBarbare extends Equipment {
    name = "Doubles hachettes barbare";

    constructor(system) {
        super(system);

        this.init([["Or", 55]]);
        this.familles.base.push("Arme");

        this.equipStat("Adresse").base = 35;
        this.equipStat("Multicoup").base = 1;

        this.text = Text;
    };
}