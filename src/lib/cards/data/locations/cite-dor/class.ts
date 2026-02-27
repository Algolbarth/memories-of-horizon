import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Location } from '../../../class/location';
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