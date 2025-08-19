import type { System } from '../../../../System/Class';
import { Batiment } from '../../../Class/Batiment';
import Text from './Text.svelte';

export class Chaudron extends Batiment {
    name = "Chaudron";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);
        this.stat("Vie").base = 10;
        this.stat("Vie").current = 10;

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Mélange").add("Main");
        }
    };
}