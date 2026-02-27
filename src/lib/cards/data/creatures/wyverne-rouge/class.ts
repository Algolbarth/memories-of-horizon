import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class WyverneRouge extends Creature {
    name = "Wyverne rouge";

    constructor(system: System) {
        super(system);

        this.level = 3;
        this.init([["Or", 30], ["Feu", 30]]);

        this.initFamily(["Reptile", "Wyverne"]);

        this.stat("Constitution").init(20);
        this.stat("Force").init(40);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Pile") && this.isAlly(card) && card.isElement("Feu")) {
            this.costReduce(6);
        }
    };
};