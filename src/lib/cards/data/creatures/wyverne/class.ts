import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class Wyverne extends Creature {
    name = "Wyverne";

    constructor(system: System) {
        super(system);

        this.level = 3;
        this.init([["Or", 50]]);

        this.initFamily(["Reptile", "Wyverne"]);

        this.stat("Constitution").init(25);
        this.stat("Force").init(25);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Pile") && this.isAlly(card)) {
            this.costReduce(5);
        }
    };
};