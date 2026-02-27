import { copy } from '../../../../utils';
import type { System } from '../../../../system/class';
import { Building } from '../../../class/building';
import Text from './text.svelte';
import { Creature } from '../../../class/creature';

export class TourDeSiege extends Building {
    name = "Tour de siège";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    roundEffect = () => {
        if (this.isArea("Terrain")) {
            let target = undefined;
            let battlefield = copy(this.owner().zone("Terrain").cards);

            for (const card of battlefield) {
                if (target == undefined && card instanceof Creature) {
                    target = card;
                }
            }

            if (target != undefined) {
                target.stat("Force").increase(10);
                target.stat("Constitution").increase(10);
            }
        }
    };
};