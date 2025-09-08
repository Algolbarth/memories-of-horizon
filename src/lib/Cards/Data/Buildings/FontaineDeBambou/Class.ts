import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class FontaineDeBambou extends Building {
    name = "Fontaine de bambou";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Eau", 25]]);
        this.stat("Santé").base = 20;
        this.stat("Santé").current = 20;

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Écoulement").add("Main");
        }
    };
}