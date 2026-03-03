import type { System } from '$lib/system/class';
import type { Card } from '$lib/cards/class/class';
import { Creature } from '$lib/cards/class/creature';
import { Equipment } from '$lib/cards/class/equipment';
import Text from './text.svelte';

export class Couronne extends Equipment {
    name = "Couronne";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain") && card instanceof Creature && this.bearer.isAlly(card)) {
            card.stat("Constitution").increase(this.bearer.level);
            card.stat("Force").increase(this.bearer.level);
        }
    };
};