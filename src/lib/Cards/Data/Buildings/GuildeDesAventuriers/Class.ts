import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class GuildeDesAventuriers extends Building {
    name = "Guilde des aventuriers";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.owner && this.zone && this.zone.name == "Terrain") {
            this.owner.getCard("Aventurier").add("Inventaire");
        }
    };
};