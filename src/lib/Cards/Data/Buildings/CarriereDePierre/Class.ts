import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class CarriereDePierre extends Building {
    name = "Carrière de pierre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Terre", 15]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.ressource("Terre").produce(10);
        }
    };
};