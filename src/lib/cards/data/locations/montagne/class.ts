import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Location } from '../../../class/location';
import Text from './text.svelte';

export class Montagne extends Location {
    name = "Montagne";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Terre", 15]]);

        this.text = Text;
    };

    canRead = (card: Card) => {
        if (card.isElement("Terre")) {
            return true;
        }
        return false;
    };
}