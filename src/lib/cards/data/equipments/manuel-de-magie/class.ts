import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';

export class ManuelDeMagie extends Equipment {
    name = "Manuel de magie";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.equipStat("Magie").init(5);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain")) {
            this.owner().getCard("Incantation").add("Inventaire");
        }
    };
};