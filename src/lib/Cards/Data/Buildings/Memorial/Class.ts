import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class Memorial extends Building {
    name = "Mémorial";

    constructor(system: System) {
        super(system);

        this.init([["Or", 110]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().getCard("Rappel").add("Inventaire");
        }
    };
};