import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class WyverneVerte extends Creature {
    name = "Wyverne verte";

    constructor(system: System) {
        super(system);

        this.level = 3;
        this.init([["Or", 30], ["Végétal", 30]]);
        this.familles.base.push("Reptile");

        this.stat("Constitution").init(35);
        this.stat("Force").init(20);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.zone.name == "Pile" && card.owner == this.owner && card.elements.total().includes("Végétal")) {
            this.costReduce(6);
        }
    };
}