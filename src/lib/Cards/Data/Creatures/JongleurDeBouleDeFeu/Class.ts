import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class JongleurDeBouleDeFeu extends Creature {
    name = "Jongleur de boule de feu";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Feu", 20]]);

        this.initFamily(["Gobelin"]);

        this.stat("Constitution").init(3);
        this.stat("Force").init(10);
        this.stat("Magie").init(15);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isAlly(card) && card.name == "Boule de feu") {
            this.owner().getCard("Boule de feu").add("Pile");
        }
    };
};