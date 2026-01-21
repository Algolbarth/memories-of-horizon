import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class WyverneRouge extends Creature {
    name = "Wyverne rouge";

    constructor(system: System) {
        super(system);

        this.level = 3;
        this.init([["Or", 30], ["Feu", 30]]);

        this.initFamily(["Reptile"]);

        this.stat("Constitution").init(20);
        this.stat("Force").init(40);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.zone.name == "Pile" && card.owner == this.owner && card.elements.total().includes("Feu")) {
            this.costReduce(6);
        }
    };
};