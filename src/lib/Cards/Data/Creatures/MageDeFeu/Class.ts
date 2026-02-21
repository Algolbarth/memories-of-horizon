import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class MageDeFeu extends Creature {
    name = "Mage de feu";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Feu", 20]]);

        this.initFamily(["Gobelin", "Mage"]);

        this.stat("Constitution").init(3);
        this.stat("Force").init(20);
        this.stat("Magie").init(5);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Terrain") && card.isFamily("Sort") && this.isAlly(card) && this.adversary().zone("Terrain").cards.length > 0) {
            this.adversary().zone("Terrain").cards[0].damageByEffect(5);
        }
    };
};