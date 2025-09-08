import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Phytomancien extends Creature {
    name = "Phytomancien";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Végétal", 12]]);
        this.familles.base.push("Elfe");

        this.stat("Santé").base = 10;
        this.stat("Santé").current = 10;
        this.stat("Force").base = 5;

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Terrain" && card.elements.total().includes("Végétal") && card.owner == this.owner) {
            this.stat("Santé").add += 3;
            this.stat("Santé").current += 3;
        }
    };
}