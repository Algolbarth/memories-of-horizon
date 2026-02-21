import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';
import { Creature } from '../../../Class/Creature';

export class Banniere extends Item {
    name = "Bannière";

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
            if (card instanceof Creature) {
                card.stat("Constitution").increase(3);
                card.stat("Force").increase(3);
            }
        }

        this.move("Défausse");
        this.pose();
    };
};