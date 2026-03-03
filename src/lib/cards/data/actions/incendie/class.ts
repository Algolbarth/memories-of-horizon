import { copy } from '$lib/utils';
import type { System } from '$lib/system/class';
import { Action } from '$lib/cards/class/action';
import Text from './text.svelte';

export class Incendie extends Action {
    name = "Incendie";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40], ["Feu", 40]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        let adversary_battlefield = copy(this.adversary().zone("Terrain").cards);
        for (const card of adversary_battlefield) {
            card.stat("Brûlure").increase(5);
        }

        this.move("Défausse");
        this.pose();
    };
};