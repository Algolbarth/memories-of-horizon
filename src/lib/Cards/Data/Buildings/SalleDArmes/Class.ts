import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class SalleDArmes extends Building {
    name = "Salle d'armes";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);
        this.stat("Constitution").init(10);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Entraînement").add("Réserve");
        }
    };
};