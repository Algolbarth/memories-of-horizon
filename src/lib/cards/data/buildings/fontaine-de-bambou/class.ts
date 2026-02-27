import type { System } from '../../../../system/class';
import { Building } from '../../../class/building';
import Text from './text.svelte';

export class FontaineDeBambou extends Building {
    name = "Fontaine de bambou";

    constructor(system: System) {
        super(system);

        this.init([["Or", 18], ["Eau", 18]]);

        this.stat("Constitution").init(10);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().getCard("Écoulement").add("Inventaire");
        }
    };
};