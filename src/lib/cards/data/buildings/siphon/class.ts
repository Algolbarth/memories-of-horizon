import type { System } from '$lib/system/class';
import type { Card } from '$lib/cards/class/class';
import { Building } from '$lib/cards/class/building';
import Text from './text.svelte';

export class Siphon extends Building {
    name = "Siphon";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Eau", 15]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Terrain") && card.isElement("Eau") && this.isAlly(card)) {
            this.getSale("Eau").increase(5);
        }
    };
};