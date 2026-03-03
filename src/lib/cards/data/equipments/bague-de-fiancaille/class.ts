import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from './text.svelte';

export class BagueDeFiancailles extends Equipment {
    name = "Bague de fiançailles";

    constructor(system: System) {
        super(system);

        this.init([["Or", 6]]);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain")) {
            this.owner().getCard(this.bearer.name).add("Pile");
        }
    };
};