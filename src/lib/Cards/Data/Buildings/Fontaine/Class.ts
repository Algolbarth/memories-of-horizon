import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Batiment } from '../../../Class/Building';
import Text from './Text.svelte';

export class Fontaine extends Batiment {
    name = "Fontaine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Eau", 10]]);
        this.stat("Vie").base = 10;
        this.stat("Vie").current = 10;

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Terrain" && card.elements.total().includes("Eau") && this.owner == card.owner) {
            this.owner.draw(1);
        }
    };
}