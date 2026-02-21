import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Phytomancien extends Creature {
    name = "Phytomancien";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Végétal", 12]]);

        this.initFamily(["Elfe"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(5);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Terrain") && card.isElement("Végétal") && this.isAlly(card)) {
            this.stat("Constitution").increase(3);
        }
    };
};