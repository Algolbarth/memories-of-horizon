import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from './text.svelte';

export class Carquois extends Equipment {
    name = "Carquois";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain")) {
            this.owner().getCard("Flèche en bois").add("Inventaire");
        }
    };
};