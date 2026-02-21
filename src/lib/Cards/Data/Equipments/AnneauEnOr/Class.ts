import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class AnneauEnOr extends Equipment {
    name = "Anneau en or";

    constructor(system: System) {
        super(system);

        this.init([["Or", 3]]);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain")) {
            this.bearer.stat("Constitution").increase(1);
            this.bearer.stat("Force").increase(1);
        }
    };
};