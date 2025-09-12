import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Archimere extends Creature {
    name = "Archimère";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);
        this.familles.base.push("Bête", "Reptile");

        this.stat("Constitution").init(25);
        this.stat("Force").init(25);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card.type == "Créature" && card.owner == this.owner) {
            for (let i = 0; i < card.familles.total().length; i++) {
                this.stat("Constitution").increase(5);
                this.stat("Force").increase(5);
            }
        }
    };
}