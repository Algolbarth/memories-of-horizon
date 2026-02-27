import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';

export class BatonDeRelais extends Equipment {
    name = "Bâton de relais";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain")) {
            this.owner().getCard("Relais").add("Inventaire");
        }
    };
};