import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Dresseur extends Creature {
    name = "Dresseur";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Végétal", 10]]);

        this.families.base.push("Elfe");

        this.stat("Constitution").init(10);
        this.stat("Force").init(5);

        this.text = Text;
    };

    useEffect = () => {
        let read_condition = (card: Card) => {
            if (card.type == "Créature" && card.families.total().includes("Bête")) {
                return true;
            }
            return false;
        };
        let cards = this.owner.draw(1, read_condition);

        if (cards[0] != undefined) {
            cards[0].stat("Constitution").increase(20);
            cards[0].stat("Force").increase(20);
        }

        this.move("Terrain");
        this.pose();
    };
};