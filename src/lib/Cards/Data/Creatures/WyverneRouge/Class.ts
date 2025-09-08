import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class WyverneRouge extends Creature {
    name = "Wyverne rouge";

    constructor(system: System) {
        super(system);

        this.level = 3;
        this.init([["Or", 30], ["Feu", 30]]);
        this.familles.base.push("Reptile");

        this.stat("Santé").base = 20;
        this.stat("Santé").current = 20;
        this.stat("Force").base = 40;

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Boutique" && card.owner == this.owner && card.elements.total().includes("Feu")) {
            this.costReduce(6);
        }
    };
}