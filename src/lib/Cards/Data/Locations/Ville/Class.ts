import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Location } from '../../../Class/Location';
import Text from './Text.svelte';

export class Ville extends Location {
    name = "Ville";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.text = Text;
    };

    condition = (card: Card) => {
        if (card.elements.total().includes("Neutre")) {
            return true;
        }
        return false;
    };
}