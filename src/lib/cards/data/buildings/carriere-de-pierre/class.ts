import type { System } from '$lib/system/class';
import { Building } from '$lib/cards/class/building';
import Text from './text.svelte';

export class CarriereDePierre extends Building {
    name = "Carrière de pierre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Terre", 15]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().ressource("Terre").produce(10);
        }
    };
};