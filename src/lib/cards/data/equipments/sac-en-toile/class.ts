import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from './text.svelte';

export class SacEnToile extends Equipment {
    name = "Sac en toile";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain")) {
            this.owner().draw(1);
        }
    };
}