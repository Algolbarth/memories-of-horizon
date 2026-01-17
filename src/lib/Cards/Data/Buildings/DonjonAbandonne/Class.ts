import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class DonjonAbandonne extends Building {
    name = "Donjon abandonné";

    constructor(system: System) {
        super(system);

        this.init([["Or", 120]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Monstre errant").add("Réserve");
        }
    };
};