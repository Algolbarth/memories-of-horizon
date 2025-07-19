import { Equipment } from '../Equipement';
import Text from '../Text.svelte';

export class Egide extends Equipment {
    name = "Égide";

    constructor(system) {
        super(system);

        this.init([["Or", 10]]);
        this.familles.base.push("Armure");

        this.equipStat("Protection").base = 1;

        this.text = Text;
    };
}