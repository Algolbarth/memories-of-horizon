import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Location } from '../../../Class/Location';
import Text from './Text.svelte';

export class Village extends Location {
    name = "Village";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.text = Text;
    };

    condition = function (card: Card) {
        if (card.level <= 5) {
            return true;
        }
        return false;
    };
}