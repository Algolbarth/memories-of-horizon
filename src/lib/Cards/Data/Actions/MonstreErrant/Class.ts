import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class MonstreErrant extends Action {
    name = "Monstre errant";

    constructor(system: System) {
        super(system);

        this.init([["Or", 55]]);

        this.text = Text;
    };

    useEffect = () => {
        let read_condition = (card: Card) => {
            if (card.type == "Créature") {
                return true;
            }
            return false;
        };
        let cards = this.owner.draw(1, read_condition);
        if (cards[0] != undefined) {
            cards[0].stat("Constitution").increase(100);
            cards[0].stat("Force").increase(100);
        }

        this.move("Défausse");
        this.pose();
    };
}