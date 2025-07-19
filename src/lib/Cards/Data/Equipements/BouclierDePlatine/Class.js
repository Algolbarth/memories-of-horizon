import { Equipment } from '../Equipement';
import Text from '../Text.svelte';

export class BouclierDePlatine extends Equipment {
    name = "Bouclier de platine";

    constructor(system) {
        super(system);

        this.init([["Or", 100]]);
        this.familles.base.push("Armure");

        this.equipStat("Défense").base = 100;

        this.text = Text;
    };
}