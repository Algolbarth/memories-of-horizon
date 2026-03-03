import { copy } from '$lib/utils';
import type { System } from '$lib/system/class';
import { Item } from '$lib/cards/class/item';
import Text from './text.svelte';
import { Creature } from '$lib/cards/class/creature';

export class CorDeGuerre extends Item {
    name = "Cor de guerre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

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
                card.stat("Force").increase(5);
            }
        }

        this.move("Défausse");
        this.pose();
    };
};