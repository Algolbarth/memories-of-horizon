import { Equipment } from '../Equipement.js';
import Text from '../Text.svelte';

export class BottesEnCuir extends Equipment {
    name = "Bottes en cuir";

    constructor(system) {
        super(system);

        this.init([["Or", 10]]);
        this.familles.base.push("Armure");

        this.equipStat("Vitesse").base = 1;

        this.text = Text;
    };
}