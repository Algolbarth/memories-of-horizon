import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Aquamancien extends Creature {
    name = "Aquamancien";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Eau", 12]]);
        this.familles.base.push("Ondin");

        this.stat("Constitution").init(5);
        this.stat("Force").base = 5;

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card.elements.total().includes("Eau") && card.owner == this.owner) {
            this.owner.ressource("Eau").stock += 1;
        }
    };
}