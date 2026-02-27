import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class WyverneMarine extends Creature {
    name = "Wyverne marine";

    constructor(system: System) {
        super(system);

        this.level = 3;
        this.init([["Or", 30], ["Eau", 30]]);

        this.initFamily(["Reptile", "Wyverne"]);

        this.stat("Constitution").init(20);
        this.stat("Force").init(20);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Pile") && this.isAlly(card) && card.isElement("Eau")) {
            this.costReduce(6);
        }
    };

    useEffect = () => {
        this.owner().ressource("Eau").produce(10);

        this.move("Terrain");
        this.pose();
    };
};