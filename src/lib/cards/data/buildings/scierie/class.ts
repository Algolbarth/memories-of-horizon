import type { System } from '$lib/system/class';
import { Building } from '$lib/cards/class/building';
import Text from './text.svelte';

export class Scierie extends Building {
    name = "Scierie";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Végétal", 15]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().ressource("Végétal").produce(10);
        }
    };
};