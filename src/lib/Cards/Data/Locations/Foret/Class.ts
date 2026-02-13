import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Location } from '../../../Class/Location';
import Text from './Text.svelte';

export class Foret extends Location {
    name = "Forêt";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Végétal", 15]]);

        this.text = Text;
    };

    canRead = (card: Card) => {
        if (card.isElement("Végétal")) {
            return true;
        }
        return false;
    };
}