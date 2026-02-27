import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class Palefrenier extends Creature {
    name = "Palefrenier";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    useEffect = () => {
        if (this.owner().zone("Pile").isNotFull()) {
            let card: Card = this.owner().getCard("Monture de chevalier");
            card.costReduce(20);
            card.add("Pile");
        }

        this.move("Terrain");
        this.pose();
    };
};