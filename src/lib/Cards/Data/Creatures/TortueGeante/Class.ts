import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class TortueGéante extends Creature {
    name = "Tortue géante";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Eau", 15]]);
        this.familles.base.push("Reptile");

        this.stat("Constitution").init(20);
        this.stat("Force").init(5);
        this.stat("Endurance").init(5);

        this.text = Text;
    };

    dieEffect = () => {
        this.owner.getCard("Carapace de tortue").add("Réserve");
    };
};