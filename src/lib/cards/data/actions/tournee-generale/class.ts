import { copy } from '$lib/utils';
import type { System } from '$lib/system/class';
import { Action } from '$lib/cards/class/action';
import Text from './text.svelte';
import { Creature } from '$lib/cards/class/creature';

export class TourneeGenerale extends Action {
    name = "Tournée générale";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        let number = 0;
        let battlefield = copy(this.owner().zone("Terrain").cards);
        for (const card of battlefield) {
            if (card instanceof Creature) {
                number++;
            }
        }
        for (let i = 0; i < number; i++) {
            this.owner().getCard("Bière").add("Inventaire");
        }

        this.move("Défausse");
        this.pose();
    };
}