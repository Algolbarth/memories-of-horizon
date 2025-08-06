import type { System } from '../../../../System/Class';
import { Lieu } from '../../../Class/Lieu';
import Text from './Text.svelte';

export class Ville extends Lieu {
    name = "Ville";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.text = Text;
    };

    condition = function (card: Card) {
        if (card.elements.total().includes("Neutre")) {
            return true;
        }
        return false;
    };
}