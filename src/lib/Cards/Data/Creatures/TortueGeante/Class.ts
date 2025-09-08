import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class TortueGéante extends Creature {
    name = "Tortue géante";

    constructor(system: System) {
        super(system);

        this.init([["Or", 18], ["Eau", 18]]);
        this.familles.base.push("Reptile");

        this.stat("Santé").base = 15;
        this.stat("Santé").current = 15;
        this.stat("Force").base = 5;
        this.stat("Endurance").base = 5;

        this.text = Text;
    };

    dieEffect = function () {
        this.owner.getCard("Carapace de tortue").add("Main");
    };
}