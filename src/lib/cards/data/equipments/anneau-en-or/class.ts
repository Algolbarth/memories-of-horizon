import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from './text.svelte';

export class AnneauEnOr extends Equipment {
    name = "Anneau en or";

    constructor(system: System) {
        super(system);

        this.init([["Or", 3]]);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain")) {
            this.bearer.stat("Constitution").increase(1);
            this.bearer.stat("Force").increase(1);
        }
    };
};