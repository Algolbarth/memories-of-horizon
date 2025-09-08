import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Princesse extends Creature {
    name = "Princesse";

    constructor(system: System) {
        super(system);

        this.init([["Or", 105]]);
        this.familles.base.push("Humain");

        this.stat("Santé").base = 5;
        this.stat("Santé").current = 5;
        this.stat("Force").base = 5;

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Terrain" && card.type == "Créature" && card.owner == this.owner) {
            card.stat("Santé").add += 10;
            card.stat("Santé").current += 10;
            card.stat("Force").add += 10;
        }
    };
}