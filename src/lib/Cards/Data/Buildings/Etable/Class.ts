import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class Etable extends Building {
    name = "Étable";

    constructor(system: System) {
        super(system);

        this.init([["Or", 60]]);
        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Cheval").add("Réserve");
        }
    };
}