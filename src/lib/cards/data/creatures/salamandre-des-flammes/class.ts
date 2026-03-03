import type { System } from '$lib/system/class';
import { Creature } from '$lib/cards/class/creature';
import Text from './text.svelte';

export class SalamandreDesFlammes extends Creature {
    name = "Salamandre des flammes";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Feu", 10]]);

        this.initFamily(["Reptile"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    startPhaseEffect = () => {
        this.owner().getCard("Enflammer").add("Inventaire");
    };
};