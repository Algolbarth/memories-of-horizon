import type { System } from '$lib/system/class';
import type { Card } from '$lib/cards/class/class';
import { Creature } from '$lib/cards/class/creature';
import Text from './text.svelte';

export class Aquamancien extends Creature {
    name = "Aquamancien";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Eau", 12]]);

        this.initFamily(["Ondin"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Terrain") && card.isElement("Eau") && this.isAlly(card)) {
            this.owner().ressource("Eau").stock(2);
        }
    };
};