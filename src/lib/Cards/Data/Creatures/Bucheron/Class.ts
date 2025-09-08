import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Bucheron extends Creature {
    name = "Bûcheron";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Végétal", 20]]);
        this.familles.base.push("Elfe");

        this.stat("Santé").base = 10;
        this.stat("Santé").current = 10;
        this.stat("Force").base = 10;

        this.text = Text;
    };

    otherDieEffect = function (card: Card) {
        if (this.zone.name == "Terrain" && card.elements.total().includes("Végétal")) {
            this.stat("Force").add += 2;
            this.owner.ressource("Végétal").stock += 1;
        }
    };
}