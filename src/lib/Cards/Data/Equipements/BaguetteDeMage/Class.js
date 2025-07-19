import { Equipment } from '../Equipement';
import Text from '../Text.svelte';

export class BaguetteDeMage extends Equipment {
    name = "Baguette de mage";

    constructor(system) {
        super(system);

        this.init([["Or", 30]]);
        this.familles.base.push("Arme");

        this.equipStat("Magie").base = 15;

        this.text = Text;
    };
}