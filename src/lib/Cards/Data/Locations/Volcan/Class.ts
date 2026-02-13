import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Location } from '../../../Class/Location';
import Text from './Text.svelte';

export class Volcan extends Location {
    name = "Volcan";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Feu", 15]]);

        this.text = Text;
    };

    canRead = (card: Card) => {
        if (card.isElement("Feu")) {
            return true;
        }
        return false;
    };
}