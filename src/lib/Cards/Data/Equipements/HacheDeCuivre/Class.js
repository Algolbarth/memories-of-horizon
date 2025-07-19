import { Equipment } from '../Equipement';
import Text from '../Text.svelte';

export class HacheDeCuivre extends Equipment {
    name = "Hache de cuivre";

    constructor(system) {
        super(system);

        this.init([["Or", 20]]);
        this.familles.base.push("Arme");

        this.equipStat("Adresse").base = 20;

        this.text = Text;
    };
}