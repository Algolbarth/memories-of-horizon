import { Lieu } from '../Lieu';
import Text from './Text.svelte';

export class Ville extends Lieu {
    name = "Ville";

    constructor(system) {
        super(system);

        this.init([["Or", 30]]);

        this.text = Text;
    };

    condition = function (card) {
        if (card.elements.total().includes("Neutre")) {
            return true;
        }
        return false;
    };
}