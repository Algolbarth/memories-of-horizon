import { Batiment } from '../../../Class/Batiment';
import Text from './Text.svelte';

export class TourDArcher extends Batiment {
    name = "Tour d'archer";

    constructor(system) {
        super(system);

        this.init([["Or", 15]]);
        this.stat("Vie").base = 10;
        this.stat("Vie").current = 10;

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Flèche en bois").add("Main");
        }
    };
}