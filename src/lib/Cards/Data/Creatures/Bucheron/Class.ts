import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Bucheron extends Creature {
    name = "Bûcheron";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Végétal", 15]]);
        this.familles.base.push("Elfe");

        this.stat("Constitution").init(10);
        this.stat("Force").init(5);

        this.text = Text;
    };

    otherDieEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card.elements.total().includes("Végétal")) {
            this.stat("Force").increase(2);
            this.owner.ressource("Végétal").stock += 1;
        }
    };
}