import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class JongleurDeBouleDeFeu extends Creature {
    name = "Jongleur de boule de feu";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Feu", 20]]);
        this.familles.base.push("Gobelin");

        this.stat("Santé").base = 3;
        this.stat("Santé").current = 3;
        this.stat("Force").base = 10;
        this.stat("Magie").base = 15;

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (card.owner == this.owner && card.name == "Boule de feu") {
            this.owner.getCard("Boule de feu").add("Boutique");
        }
    };
}