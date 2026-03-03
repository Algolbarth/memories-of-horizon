import { copy } from '$lib/utils';
import type { System } from '$lib/system/class';
import { Action } from '$lib/cards/class/action';
import Text from './text.svelte';
import { Creature } from '$lib/cards/class/creature';

export class Ruee extends Action {
    name = "Ruée";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner().zone("Terrain").cards) {
            if (card instanceof Creature) {
                return true;
            }
        }
        return false;
    };

    useEffect = () => {
        let battlefield = copy(this.owner().zone("Terrain").cards);
        for (const card of battlefield) {
            if (card instanceof Creature) {
                card.stat("Vitesse").turn += 1;
            }
        }

        this.move("Défausse");
        this.pose();
    };
};