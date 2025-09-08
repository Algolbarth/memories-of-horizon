import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class BassinDeReproduction extends Building {
    name = "Bassin de reproduction";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Eau", 20]]);
        this.familles.base.push("Ondin");
        
        this.stat("Santé").base = 20;
        this.stat("Santé").current = 20;

        this.text = Text;
    };

    turnEffect = function () {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Ondin").add("Terrain");
        }
    };
}