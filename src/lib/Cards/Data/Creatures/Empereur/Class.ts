import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import type { Card } from '../../../Class';

export class Empereur extends Creature {
    name = "Empereur";

    constructor(system: System) {
        super(system);

        this.init([["Or", 500]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(100);
        this.stat("Force").init(100);

        this.text = Text;
    };

    useEffect = () => {
        let battlefield = copy(this.owner().zone("Terrain").cards);
        for (const card of battlefield) {
            if (card instanceof Creature) {
                this.stat("Constitution").increase(10);
                this.stat("Force").increase(10);

                card.stat("Constitution").increase(10);
                card.stat("Force").increase(10);
            }
        }

        this.move("Terrain");
        this.pose();
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Terrain") && card instanceof Creature && this.isAlly(card)) {
            this.stat("Constitution").increase(10);
            this.stat("Force").increase(10);

            card.stat("Constitution").increase(10);
            card.stat("Force").increase(10);
        }
    };
};