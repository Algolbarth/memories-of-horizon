import { Lieu } from '../../../Class/Lieu';
import Text from './Text.svelte';

export class Volcan extends Lieu {
    name = "Volcan";

    constructor(system) {
        super(system);

        this.init([["Or", 15], ["Feu", 15]]);

        this.text = Text;
    };

    condition = function (card) {
        if (card.elements.total().includes("Feu")) {
            return true;
        }
        return false;
    };
}