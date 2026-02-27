import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class WyverneVerte extends Creature {
    name = "Wyverne verte";

    constructor(system: System) {
        super(system);

        this.level = 3;
        this.init([["Or", 30], ["Végétal", 30]]);

        this.initFamily(["Reptile", "Wyverne"]);

        this.stat("Constitution").init(35);
        this.stat("Force").init(20);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Pile") && this.isAlly(card) && card.isElement("Végétal")) {
            this.costReduce(6);
        }
    };
};