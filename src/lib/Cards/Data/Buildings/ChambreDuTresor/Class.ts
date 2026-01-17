import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class ChambreDuTresor extends Building {
    name = "Chambre du trésor";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Trésor").add("Réserve");
        }
    };
};