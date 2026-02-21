import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class JeuneWyverne extends Creature {
    name = "Jeune wyverne";

    constructor(system: System) {
        super(system);

        this.level = 1;
        this.init([["Or", 30]]);

        this.initFamily(["Reptile"]);

        this.stat("Constitution").init(15);
        this.stat("Force").init(15);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Pile") && this.isAlly(card) && card.level == 1) {
            this.costReduce(3);
        }
    };
};