import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Building } from '../../../class/building';
import Text from './text.svelte';

export class Cascade extends Building {
    name = "Cascade";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Eau", 15]]);

        this.stat("Constitution").init(10);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Terrain") && card.isElement("Eau") && this.isAlly(card)) {
            let readCondition = (card: Card) => {
                if (card.isElement("Eau")) {
                    return true;
                }
                return false;
            };
            this.owner().draw(1, readCondition);
        }
    };
};