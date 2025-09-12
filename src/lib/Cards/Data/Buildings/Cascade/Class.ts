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
        if (this.zone.name == "Terrain" && card.elements.total().includes("Eau") && this.owner == card.owner) {
            let condition = (card: Card) => {
                if (card.elements.total().includes("Eau")) {
                    return true;
                }
                return false;
            };
            this.owner.draw(1, condition);
        }
    };
}