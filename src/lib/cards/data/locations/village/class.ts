import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Location } from '../../../class/location';
import Text from './text.svelte';

export class Village extends Location {
    name = "Village";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.text = Text;
    };

    canRead = (card: Card) => {
        if (card.level <= 5) {
            return true;
        }
        return false;
    };
}