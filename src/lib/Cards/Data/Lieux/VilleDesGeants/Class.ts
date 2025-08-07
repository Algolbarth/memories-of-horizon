import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Lieu } from '../../../Class/Lieu';
import Text from './Text.svelte';

export class VilleDesGeants extends Lieu {
    name = "Ville des géants";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.text = Text;
    };

    condition = function (card: Card) {
        if (card.level >= 5) {
            return true;
        }
        return false;
    };
}