import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Pyromancien extends Creature {
    name = "Pyromancien";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Feu", 12]]);
        this.familles.base.push("Gobelin");

        this.stat("Constitution").init(3);
        this.stat("Force").base = 10;

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Terrain" && card.elements.total().includes("Feu") && card.owner == this.owner) {
            this.stat("Force").increase(5);
        }
    };
}