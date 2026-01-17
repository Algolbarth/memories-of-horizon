import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Princesse extends Creature {
    name = "Princesse";

    constructor(system: System) {
        super(system);

        this.init([["Or", 105]]);

        this.families.base.push("Humain");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card.type == "Créature" && card.owner == this.owner) {
            card.stat("Constitution").increase(10);
            card.stat("Force").increase(10);
        }
    };
};