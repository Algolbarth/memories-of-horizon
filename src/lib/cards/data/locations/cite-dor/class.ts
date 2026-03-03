import type { System } from '$lib/system/class';
import type { Card } from '$lib/cards/class/class';
import { Location } from '$lib/cards/class/location';
import Text from './text.svelte';

export class CiteDOr extends Location {
    name = "Cité d'or";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.text = Text;
    };

    canRead = (card: Card) => {
        if (card.level == this.owner().zone("Pile").level()) {
            return true;
        }
        return false;
    };
};