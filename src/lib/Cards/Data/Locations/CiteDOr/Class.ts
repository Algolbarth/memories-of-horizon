import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Location } from '../../../Class/Location';
import Text from './Text.svelte';

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