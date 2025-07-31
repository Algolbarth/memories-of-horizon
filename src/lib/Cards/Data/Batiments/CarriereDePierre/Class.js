import { Batiment } from '../../../Class/Batiment';
import Text from './Text.svelte';

export class CarriereDePierre extends Batiment {
    name = "Carrière de pierre";

    constructor(system) {
        super(system);

        this.init([["Or", 15], ["Terre", 15]]);

        this.stat("Vie").base = 20;
        this.stat("Vie").current = 20;

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            this.owner.ressource("Terre").current += 10;
        }
    };
}