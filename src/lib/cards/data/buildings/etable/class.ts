import type { System } from '$lib/system/class';
import { Building } from '$lib/cards/class/building';
import Text from './text.svelte';

export class Etable extends Building {
    name = "Étable";

    constructor(system: System) {
        super(system);

        this.init([["Or", 60]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().getCard("Cheval").add("Inventaire");
        }
    };
};