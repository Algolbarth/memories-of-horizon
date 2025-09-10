import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class TourDeGuet extends Building {
    name = "Tour de guet";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);
        this.stat("Constitution").init(10);

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Cibler").add("Réserve");
        }
    };
}