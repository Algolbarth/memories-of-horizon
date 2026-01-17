import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class SoldatNain extends Creature {
    name = "Soldat nain";

    constructor(system: System) {
        super(system);

        this.init([["Or", 18], ["Terre", 18]]);

        this.families.base.push("Nain");

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);
        this.stat("Endurance").init(5);

        this.text = Text;
    };

    addEffect = (zone: string) => {
        if (zone == "Terrain") {
            let land = copy(this.owner.zone("Terrain").cards);
            for (const card of land) {
                if (card.type == "Bâtiment") {
                    this.stat("Constitution").increase(2);
                    this.stat("Force").increase(2);
                }
            }
        }
    };
};