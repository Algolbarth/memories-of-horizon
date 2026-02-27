import type { System } from '../../../../system/class';
import { copy } from '../../../../utils';
import { Action } from '../../../class/action';
import Text from './text.svelte';

export class ErigerLesFrontieres extends Action {
    name = "Ériger les frontières";

    constructor(system: System) {
        super(system);

        this.init([["Or", 75], ["Terre", 75]]);

        this.text = Text;
    };

    useEffect = () => {
        this.owner().zone("Terrain").size += 1;

        let battlefield = copy(this.owner().zone("Terrain").cards);
        for (const card of battlefield) {
            card.stat("Endurance").increase(this.owner().zone("Terrain").size);
        }

        this.move("Défausse");
        this.pose();
    };
};