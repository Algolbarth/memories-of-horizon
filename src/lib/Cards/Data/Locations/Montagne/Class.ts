import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Lieu } from '../../../Class/Location';
import Text from './Text.svelte';

export class Montagne extends Lieu {
    name = "Montagne";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Terre", 15]]);

        this.text = Text;
    };

    condition = function (card: Card) {
        if (card.elements.total().includes("Terre")) {
            return true;
        }
        return false;
    };
}