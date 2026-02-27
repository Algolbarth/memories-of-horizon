import type { System } from '../../../../system/class';
import { Building } from '../../../class/building';
import Text from './text.svelte';

export class BelierDeCombat extends Building {
    name = "Bélier de combat";

    constructor(system: System) {
        super(system);

        this.init([["Or", 170]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().getCard("Démolition").add("Inventaire");
        }
    };
};