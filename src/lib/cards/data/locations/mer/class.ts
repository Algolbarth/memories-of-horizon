import type { System } from '$lib/system/class';
import type { Card } from '$lib/cards/class/class';
import { Location } from '$lib/cards/class/location';
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