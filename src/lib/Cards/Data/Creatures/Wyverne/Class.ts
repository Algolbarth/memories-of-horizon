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

        this.stat("Vie").base = 25;
        this.stat("Vie").current = 25;
        this.stat("Attaque").base = 25;

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Boutique" && card.owner == this.owner) {
            this.costReduce(5);
        }
    };
}