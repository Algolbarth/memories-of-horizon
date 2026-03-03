import type { System } from '$lib/system/class';
import type { Card } from '$lib/cards/class/class';
import { Creature } from '$lib/cards/class/creature';
import Text from './text.svelte';

export class Princesse extends Creature {
    name = "Princesse";

    constructor(system: System) {
        super(system);

        this.init([["Or", 105]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Terrain") && card instanceof Creature && this.isAlly(card)) {
            card.stat("Constitution").increase(10);
            card.stat("Force").increase(10);
        }
    };
};