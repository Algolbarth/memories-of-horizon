import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Action } from '../../../class/action';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class MonstreErrant extends Action {
    name = "Monstre errant";

    constructor(system: System) {
        super(system);

        this.init([["Or", 55]]);

        this.text = Text;
    };

    useEffect = () => {
        let readCondition = (card: Card) => {
            if (card instanceof Creature) {
                return true;
            }
            return false;
        };
        let cards = this.owner().draw(1, readCondition);
        if (cards[0] != undefined) {
            cards[0].stat("Constitution").increase(100);
            cards[0].stat("Force").increase(100);
        }

        this.move("Défausse");
        this.pose();
    };
}