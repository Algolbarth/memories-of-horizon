import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class CeintureDeCuir extends Equipment {
    name = "Ceinture de cuir";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            this.owner.getCard("Option").add("Réserve");
        }
    };
};