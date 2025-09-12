import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Phytomancien extends Creature {
    name = "Phytomancien";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Végétal", 12]]);
        this.familles.base.push("Elfe");

        this.stat("Constitution").init(10);
        this.stat("Force").base = 5;

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card.elements.total().includes("Végétal") && card.owner == this.owner) {
            this.stat("Constitution").increase(3);
        }
    };
}