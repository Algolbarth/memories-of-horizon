import type { System } from '$lib/system/class';
import { Building } from '$lib/cards/class/building';
import Text from './text.svelte';

export class Officine extends Building {
    name = "Officine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().getCard("Potion de soin").add("Inventaire");
        }
    };
};