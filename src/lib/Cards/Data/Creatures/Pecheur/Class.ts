import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Pecheur extends Creature {
    name = "Pêcheur";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Eau", 8]]);

        this.families.base.push("Ondin");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    useEffect = () => {
        let read_condition = (card: Card) => {
            if (card.type == "Créature" && card.families.total().includes("Poisson")) {
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
};