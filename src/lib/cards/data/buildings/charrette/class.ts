import type { System } from '$lib/system/class';
import { Building } from '$lib/cards/class/building';
import Text from './text.svelte';

export class Charrette extends Building {
    name = "Charrette";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.stat("Constitution").init(10);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().draw(5);
        }
    };
};