import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class Siphon extends Building {
    name = "Siphon";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Eau", 12]]);

        this.stat("Constitution").init(10);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card.elements.total().includes("Eau") && this.owner == card.owner) {
            this.getSale("Eau").base += 5;
        }
    };
};