import { copy } from '$lib/utils';
import type { System } from '$lib/system/class';
import { Item } from '$lib/cards/class/item';
import Text from './text.svelte';

export class Blason extends Item {
    name = "Blason";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        let battlefield = copy(this.owner().zone("Terrain").cards);
        for (const card of battlefield) {
            card.stat("Endurance").increase(3);
        }

        this.move("Défausse");
        this.pose();
    };
};