import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Lieu } from '../../../Class/Location';
import Text from './Text.svelte';

export class Volcan extends Lieu {
    name = "Volcan";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Feu", 15]]);

        this.text = Text;
    };

    condition = function (card: Card) {
        if (card.elements.total().includes("Feu")) {
            return true;
        }
        return false;
    };
}