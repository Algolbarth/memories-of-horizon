import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';

export class TrousseauDeCles extends Equipment {
    name = "Trousseau de clés";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain")) {
            this.owner().getCard("Clé en or").add("Inventaire");
        }
    };
};