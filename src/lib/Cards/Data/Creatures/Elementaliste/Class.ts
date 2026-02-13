import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Elementaliste extends Creature {
    name = "Élémentaliste";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    useEffect = () => {
        let readCondition = (card: Card) => {
            if (card.isFamily("Élémentaire")) {
                return true;
            }
            return false;
        };
        let cards = this.owner.draw(1, readCondition);

        if (cards[0] != undefined) {
            cards[0].costReduce(20);
        }

        this.move("Terrain");
        this.pose();
    };
};