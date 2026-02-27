import type { System } from '../../../../system/class';
import { copy } from '../../../../utils';
import { Action } from '../../../class/action';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class BrulageDirige extends Action {
    name = "Brûlage dirigé";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50], ["Feu", 50]]);

        this.text = Text;
    };

    useEffect = () => {
        this.owner().zone("Terrain").size += 1;

        let battlefield = copy(this.owner().zone("Terrain").cards);
        for (const card of battlefield) {
            if (card instanceof Creature) {
                card.stat("Force").increase(this.owner().zone("Terrain").size);
            }
        }

        this.move("Défausse");
        this.pose();
    };
};