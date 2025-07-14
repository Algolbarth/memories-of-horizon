import { Equipment } from '../Equipement.js';
import Text from '../Text.svelte';

export class BouclierDeFer extends Equipment {
    name = "Bouclier de fer";

    constructor(system) {
        super(system);

        this.init([["Or", 25]]);
        this.familles.base.push("Armure");

        this.equipStat("Défense").base = 25;

        this.text = Text;
    };
}