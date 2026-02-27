import { copy } from '../../../../utils';
import type { System } from '../../../../system/class';
import { Building } from '../../../class/building';
import Text from './text.svelte';

export class Marche extends Building {
    name = "Marché";

    constructor(system: System) {
        super(system);

        this.init([["Or", 110]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            let reserve = copy(this.owner().zone("Pile").cards);
            for (const card of reserve) {
                card.getCost("Or").decrease(5);
            }
        }
    };
};