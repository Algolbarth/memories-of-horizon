import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class GarnisonDesMonts extends Building {
    name = "Garnison des monts";

    constructor(system: System) {
        super(system);

        this.init([["Or", 60], ["Terre", 60]]);
        this.stat("Constitution").init(10);

        this.text = Text;
    };

    turnEffect = function () {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Soldat nain").add("Terrain");
        }
    };
}