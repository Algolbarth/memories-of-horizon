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

        this.stat("Constitution").init(20);
        this.stat("Force").base = 20;
        this.stat("Magie").base = 5;

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.zone.name == "Pile" && card.owner == this.owner && card.familles.total().includes("Sort")) {
            this.costReduce(6);
        }
    };
}