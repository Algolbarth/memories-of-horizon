import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Building } from '../../../class/building';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class Architecte extends Creature {
    name = "Architecte";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Terre", 10]]);

        this.initFamily(["Nain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);
        this.stat("Endurance").init(3);

        this.text = Text;
    };

    useEffect = () => {
        let readCondition = (card: Card) => {
            if (card instanceof Building) {
                return true;
            }
            return false;
        };
        let cards = this.owner().draw(1, readCondition);

        if (cards[0] != undefined) {
            cards[0].costReduce(20);
        }

        this.move("Terrain");
        this.pose();
    };
};