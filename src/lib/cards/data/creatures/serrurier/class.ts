import type { Card } from '$lib/cards/class/class';
import type { System } from '$lib/system/class';
import { Creature } from '$lib/cards/class/creature';
import Text from './text.svelte';

export class Serrurier extends Creature {
    name = "Serrurier";

    constructor(system: System) {
        super(system);

        this.init([["Or", 80]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isAlly(card)) {
            if (card.name == "Clé en or") {
                this.owner().zone("Pile").turn_level += 1;
            }
            else if (card.name == "Crochetage") {
                this.owner().zone("Pile").turn_level -= 1;
            }
        }
    };
};