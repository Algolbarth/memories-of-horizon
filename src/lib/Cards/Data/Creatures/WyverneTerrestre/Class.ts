import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class WyverneTerrestre extends Creature {
    name = "Wyverne terrestre";

    constructor(system: System) {
        super(system);

        this.level = 3;
        this.init([["Or", 30], ["Terre", 30]]);

        this.initFamily(["Reptile", "Wyverne"]);

        this.stat("Constitution").init(20);
        this.stat("Force").init(20);
        this.stat("Endurance").init(10);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Pile") && this.isAlly(card) && card.isElement("Terre")) {
            this.costReduce(6);
        }
    };
};