import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class CollierDeMetamorphe extends Equipment {
    name = "Collier de métamorphe";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.initFamily(["Druide"]);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain")) {
            this.owner().getCard("Métamorphose").add("Inventaire");
        }
    };
};