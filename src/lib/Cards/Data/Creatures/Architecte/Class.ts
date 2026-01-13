import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Architecte extends Creature {
    name = "Architecte";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Terre", 10]]);
        this.families.base.push("Nain");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);
        this.stat("Endurance").init(3);

        this.text = Text;
    };

    useEffect = () => {
        let read_condition = (card: Card) => {
            if (card.type == "Bâtiment") {
                return true;
            }
            return false;
        };
        let cards = this.owner.draw(1, read_condition);

        if (cards[0] != undefined) {
            cards[0].costReduce(20);
        }

        this.move("Terrain");
        this.pose();
    };
}