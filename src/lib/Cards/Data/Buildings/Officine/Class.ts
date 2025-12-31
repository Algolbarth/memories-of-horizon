import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class Officine extends Building {
    name = "Officine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);
        this.stat("Constitution").init(10);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Potion de soin").add("Réserve");
        }
    };
};