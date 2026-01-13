import type { System } from '../../../../System/Class';
import { copy } from '../../../../Utils';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class ErigerLesFrontieres extends Action {
    name = "Ériger les frontières";

    constructor(system: System) {
        super(system);

        this.init([["Or", 75], ["Terre", 75]]);

        this.text = Text;
    };

    useEffect = () => {
        this.owner.zone("Terrain").size++;

        let land = copy(this.owner.zone("Terrain").cards);
        for (const card of land) {
            card.stat("Endurance").increase(this.owner.zone("Terrain").size);
        }

        this.move("Défausse");
        this.pose();
    };
};