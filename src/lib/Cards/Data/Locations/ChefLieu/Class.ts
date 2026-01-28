import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Location } from '../../../Class/Location';
import Text from './Text.svelte';

export class ChefLieu extends Location {
    name = "Chef-lieu";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.text = Text;
    };

    can_read = (card: Card) => {
        if (card.level >= 5) {
            return true;
        }
        return false;
    };
};