import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class Puit extends Building {
    name = "Puit";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Eau", 25]]);
        this.stat("Constitution").init(20);

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Terrain" && card.elements.total().includes("Eau") && this.owner == card.owner) {
            this.owner.ressource("Or").current += 5;
        }
    };
}