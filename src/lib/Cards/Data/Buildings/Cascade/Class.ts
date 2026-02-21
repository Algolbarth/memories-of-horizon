import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

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