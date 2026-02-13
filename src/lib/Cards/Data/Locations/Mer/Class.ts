import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Location } from '../../../Class/Location';
import Text from './Text.svelte';

export class Mer extends Location {
    name = "Mer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Eau", 15]]);

        this.text = Text;
    };

    canRead = (card: Card) => {
        if (card.isElement("Eau")) {
            return true;
        }
        return false;
    };
}