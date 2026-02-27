import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Location } from '../../../class/location';
import Text from './text.svelte';

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