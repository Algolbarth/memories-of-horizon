import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class ElementaireMarin extends Creature {
    name = "Élémentaire marin";

    constructor(system: System) {
        super(system);

        this.init([["Eau", 50]]);

        this.initFamily(["Élémentaire"]);

        this.stat("Constitution").init(50);
        this.stat("Force").init(50);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain") && this.owner().ressource("Eau").total() >= 10) {
            this.owner().ressource("Eau").spend(10);

            this.stat("Constitution").increase(10);
            this.stat("Force").increase(10);
        }
    };
};