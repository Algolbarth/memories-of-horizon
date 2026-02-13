import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Location } from '../../../Class/Location';
import Text from './Text.svelte';

export class Capitale extends Location {
    name = "Capitale";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.text = Text;
    };

    canRead = (card: Card) => {
        if (card.level >= 10) {
            return true;
        }
        return false;
    };
};