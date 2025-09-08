import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Architecte extends Creature {
    name = "Architecte";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Terre", 12]]);
        this.familles.base.push("Nain");

        this.stat("Santé").base = 5;
        this.stat("Santé").current = 5;
        this.stat("Force").base = 5;
        this.stat("Endurance").base = 3;

        this.text = Text;
    };

    useEffect = function () {
        let condition = function (card: Card) {
            if (card.type == "Bâtiment") {
                return true;
            }
            return false;
        };
        let cards = this.owner.draw(1, condition);

        if (cards[0] != undefined) {
            cards[0].costReduce(10);
        }

        this.move("Terrain");
        this.pose();
    };
}