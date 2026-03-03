import type { Card } from '$lib/cards/class/class';
import type { System } from '$lib/system/class';
import { Creature } from '$lib/cards/class/creature';
import Text from './text.svelte';

export class CoupeBourse extends Creature {
    name = "Coupe-bourse";

    constructor(system: System) {
        super(system);

        this.init([["Or", 80]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().getCard("Vol à la tire").add("Inventaire");
        }
    };

    otherPoseEffect = (card: Card) => {
        if (this.isAlly(card) && card.name == "Vol à la tire") {
            this.getSale("Or").increase(10);
        }
    };
};