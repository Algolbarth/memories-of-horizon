import { copy } from '../../../../utils';
import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class General extends Creature {
    name = "Général";

    constructor(system: System) {
        super(system);

        this.init([["Or", 110]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            let battlefield = copy(this.owner().zone("Terrain").cards);
            for (const card of battlefield) {
                if (card instanceof Creature) {
                    card.stat("Constitution").increase(5);
                    card.stat("Force").increase(5);
                }
            }
        }
    };
};