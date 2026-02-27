import { copy } from '../../../../utils';
import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';
import { Building } from '../../../class/building';

export class SoldatNain extends Creature {
    name = "Soldat nain";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Terre", 15]]);

        this.initFamily(["Nain"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);
        this.stat("Endurance").init(5);

        this.text = Text;
    };

    addEffect = (zone: string) => {
        if (zone == "Terrain") {
            let battlefield = copy(this.owner().zone("Terrain").cards);
            for (const card of battlefield) {
                if (card instanceof Building) {
                    this.stat("Constitution").increase(2);
                    this.stat("Force").increase(2);
                }
            }
        }
    };
};