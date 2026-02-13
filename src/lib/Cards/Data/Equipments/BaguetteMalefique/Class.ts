import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class BaguetteMalefique extends Equipment {
    name = "Baguette maléfique";

    constructor(system: System) {
        super(system);

        this.init([["Or", 80]]);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            this.owner.getCard("Maléfice").add("Inventaire");
        }
    };
};