import type { System } from '$lib/system/class';
import { Building } from '$lib/cards/class/building';
import Text from './text.svelte';

export class ChambreDuTresor extends Building {
    name = "Chambre du trésor";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().getCard("Trésor").add("Inventaire");
        }
    };
};