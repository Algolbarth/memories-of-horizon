import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Location } from '../../../Class/Location';
import Text from './Text.svelte';

export class VillageNatal extends Location {
    name = "Village natal";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.text = Text;
    };

    canRead = (card: Card) => {
        if (card.level == 1) {
            return true;
        }
        return false;
    };
};