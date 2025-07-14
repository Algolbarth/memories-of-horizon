import { Equipment } from '../Equipement.js';
import Text from '../Text.svelte';

export class BaguetteDArchimage extends Equipment {
    name = "Baguette d'archimage";

    constructor(system) {
        super(system);

        this.init([["Or", 100]]);
        this.familles.base.push("Arme");

        this.equipStat("Magie").base = 50;

        this.text = Text;
    };
}