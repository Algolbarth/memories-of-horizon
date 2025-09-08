import type { System } from '../../../../System/Class';
import { Batiment } from '../../../Class/Building';
import Text from './Text.svelte';

export class TourDArcher extends Batiment {
    name = "Tour d'archer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);
        this.stat("Santé").base = 10;
        this.stat("Santé").current = 10;

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Flèche en bois").add("Main");
        }
    };
}