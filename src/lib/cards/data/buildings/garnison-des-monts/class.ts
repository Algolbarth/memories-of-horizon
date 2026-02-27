import type { System } from '../../../../system/class';
import { Building } from '../../../class/building';
import Text from './text.svelte';

export class GarnisonDesMonts extends Building {
    name = "Garnison des monts";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50], ["Terre", 50]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    roundEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().getCard("Soldat nain").add("Terrain");
        }
    };
};