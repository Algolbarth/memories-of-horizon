import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class TortueGéante extends Creature {
    name = "Tortue géante";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Eau", 15]]);

        this.initFamily(["Reptile"]);

        this.stat("Constitution").init(20);
        this.stat("Force").init(5);
        this.stat("Endurance").init(5);

        this.text = Text;
    };

    perishEffect = () => {
        this.owner().getCard("Carapace de tortue").add("Inventaire");
    };
};