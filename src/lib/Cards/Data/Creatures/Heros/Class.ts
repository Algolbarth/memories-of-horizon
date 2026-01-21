import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Heros extends Creature {
    name = "Héros";

    constructor(system: System) {
        super(system);

        this.init([["Or", 110]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card instanceof Creature && card.owner == this.owner) {
            this.stat("Constitution").increase(10);
            this.stat("Force").increase(10);
        }
    };
};