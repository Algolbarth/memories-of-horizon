import type { System } from '$lib/system/class';
import { Building } from '$lib/cards/class/building';
import Text from './text.svelte';

export class TourDArcher extends Building {
    name = "Tour d'archer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().getCard("Flèche en bois").add("Inventaire");
        }
    };
};