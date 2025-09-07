import type { System } from '../../../../System/Class';
import { Batiment } from '../../../Class/Building';
import Text from './Text.svelte';

export class Siphon extends Batiment {
    name = "Siphon";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Eau", 12]]);
        this.stat("Vie").base = 10;
        this.stat("Vie").current = 10;

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Terrain" && card.elements.total().includes("Eau") && this.owner == card.owner) {
            this.getVente("Eau").base += 5;
        }
    };
}