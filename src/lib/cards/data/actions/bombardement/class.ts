import { copy } from '$lib/utils';
import type { System } from '$lib/system/class';
import { Action } from '$lib/cards/class/action';
import Text from './text.svelte';

export class Bombardement extends Action {
    name = "Bombardement";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

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
            card.damageByEffect(20);
        }

        this.move("Défausse");
        this.pose();
    };
};