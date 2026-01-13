import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Palefrenier extends Creature {
    name = "Palefrenier";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);
        this.families.base.push("Humain");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    useEffect = () => {
        this.move("Terrain");
        if (!this.owner?.zone("Pile").isFull()) {
            let card = this.owner?.getCard("Monture de chevalier");
            card?.costReduce(20);
            card?.add("Pile");
        }
        this.pose();
    };
}