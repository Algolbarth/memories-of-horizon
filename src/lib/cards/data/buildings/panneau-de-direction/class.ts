import type { System } from '$lib/system/class';
import { Building } from '$lib/cards/class/building';
import Text from './text.svelte';

export class PanneauDeDirection extends Building {
    name = "Panneau de direction";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.stat("Constitution").init(5);

        this.text = Text;
    };

    refreshStackEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().draw(1);
        }
    };
};