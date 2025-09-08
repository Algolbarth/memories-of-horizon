import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class WyverneMage extends Creature {
    name = "Wyverne mage";

    constructor(system: System) {
        super(system);

        this.level = 3;
        this.init([["Or", 60]]);
        this.familles.base.push("Reptile");

        this.stat("Santé").base = 20;
        this.stat("Santé").current = 20;
        this.stat("Force").base = 20;
        this.stat("Magie").base = 5;

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Boutique" && card.owner == this.owner && card.familles.total().includes("Sort")) {
            this.costReduce(6);
        }
    };
}