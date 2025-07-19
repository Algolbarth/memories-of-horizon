import { Batiment } from '../Batiment';
import Text from './Text.svelte';

export class Siphon extends Batiment {
    name = "Siphon";

    constructor(system) {
        super(system);

        this.init([["Or", 12], ["Eau", 12]]);
        this.stat("Vie").base = 10;
        this.stat("Vie").current = 10;

        this.text = Text;
    };

    otherPoseEffect = function (card) {
        if (this.zone.name == "Terrain" && card.elements.total().includes("Eau") && this.owner == card.owner) {
            this.getVente("Eau").base += 5;
        }
    };
}