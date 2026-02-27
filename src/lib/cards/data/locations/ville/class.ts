import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Location } from '../../../class/location';
import Text from './text.svelte';

export class Ville extends Location {
    name = "Ville";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.text = Text;
    };

    canRead = (card: Card) => {
        if (card.isElement("Neutre")) {
            return true;
        }
        return false;
    };
}