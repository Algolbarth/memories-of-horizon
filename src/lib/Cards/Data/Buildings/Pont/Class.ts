import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class Pont extends Building {
    name = "Pont";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);
        this.stat("Constitution").init(10);

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Terrain" && card.type == "Créature" && this.owner == card.owner) {
            this.owner.draw(1);
        }
    };
}