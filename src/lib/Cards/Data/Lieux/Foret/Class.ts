import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Lieu } from '../../../Class/Lieu';
import Text from './Text.svelte';

export class Foret extends Lieu {
    name = "Forêt";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Végétal", 15]]);

        this.text = Text;
    };

    condition = function (card: Card) {
        if (card.elements.total().includes("Végétal")) {
            return true;
        }
        return false;
    };
}