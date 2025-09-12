import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';

export class Blason extends Item {
    name = "Blason";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner.zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        let terrain = copy(this.owner.zone("Terrain").cards);
        for (const card of terrain) {
            card.stat("Endurance").increase(3);
        }
        this.move("Défausse");
        this.pose();
    };
}