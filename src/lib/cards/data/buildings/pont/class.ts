import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Building } from '../../../class/building';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class Pont extends Building {
    name = "Pont";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Terrain") && card instanceof Creature && this.isAlly(card)) {
            this.owner().draw(1);
        }
    };
};