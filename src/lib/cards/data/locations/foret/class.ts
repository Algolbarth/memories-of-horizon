import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Location } from '../../../class/location';
import Text from './text.svelte';

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