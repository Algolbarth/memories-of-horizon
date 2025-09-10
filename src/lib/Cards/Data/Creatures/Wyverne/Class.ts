import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Wyverne extends Creature {
    name = "Wyverne";

    constructor(system: System) {
        super(system);

        this.level = 3;
        this.init([["Or", 50]]);
        this.familles.base.push("Reptile");

        this.stat("Constitution").init(25);
        this.stat("Force").base = 25;

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Pile" && card.owner == this.owner) {
            this.costReduce(5);
        }
    };
}