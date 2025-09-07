import type { System } from '../../../../System/Class';
import { Batiment } from '../../../Class/Building';
import Text from './Text.svelte';

export class FontaineDeBambou extends Batiment {
    name = "Fontaine de bambou";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Eau", 25]]);
        this.stat("Vie").base = 20;
        this.stat("Vie").current = 20;

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Écoulement").add("Main");
        }
    };
}