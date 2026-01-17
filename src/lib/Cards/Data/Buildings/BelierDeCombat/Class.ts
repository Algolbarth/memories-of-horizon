import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class BelierDeCombat extends Building {
    name = "Bélier de combat";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.stat("Constitution").init(40);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Démolition").add("Réserve");
        }
    };
};