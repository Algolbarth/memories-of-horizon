import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Heros extends Creature {
    name = "Héros";

    constructor(system: System) {
        super(system);

        this.init([["Or", 110]]);
        this.familles.base.push("Humain");

        this.stat("Constitution").init(10);
        this.stat("Force").base = 10;

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Terrain" && card.type == "Créature" && card.owner == this.owner) {
            this.stat("Vitalité").increase(10);
            this.stat("Santé").increase(10);
            this.stat("Force").increase(10);
        }
    };
}