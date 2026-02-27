import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Location } from '../../../class/location';
import Text from './text.svelte';

export class ChefLieu extends Location {
    name = "Chef-lieu";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.text = Text;
    };

    canRead = (card: Card) => {
        if (card.level >= 5) {
            return true;
        }
        return false;
    };
};