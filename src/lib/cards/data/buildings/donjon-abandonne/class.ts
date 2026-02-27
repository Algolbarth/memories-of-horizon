import type { System } from '../../../../system/class';
import { Building } from '../../../class/building';
import Text from './text.svelte';

export class DonjonAbandonne extends Building {
    name = "Donjon abandonné";

    constructor(system: System) {
        super(system);

        this.init([["Or", 120]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().getCard("Monstre errant").add("Inventaire");
        }
    };
};