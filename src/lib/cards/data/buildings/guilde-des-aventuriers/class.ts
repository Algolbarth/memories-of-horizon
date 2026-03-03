import type { System } from '$lib/system/class';
import { Building } from '$lib/cards/class/building';
import Text from './text.svelte';

export class GuildeDesAventuriers extends Building {
    name = "Guilde des aventuriers";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().getCard("Aventurier").add("Inventaire");
        }
    };
};