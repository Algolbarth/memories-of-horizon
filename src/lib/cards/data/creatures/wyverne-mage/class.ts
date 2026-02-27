import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class WyverneMage extends Creature {
    name = "Wyverne mage";

    constructor(system: System) {
        super(system);

        this.level = 3;
        this.init([["Or", 60]]);

        this.initFamily(["Reptile", "Wyverne", "Mage"]);

        this.stat("Constitution").init(20);
        this.stat("Force").init(20);
        this.stat("Magie").init(5);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Pile") && this.isAlly(card) && card.isFamily("Sort")) {
            this.costReduce(6);
        }
    };
};