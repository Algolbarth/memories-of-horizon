import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Bucheron extends Creature {
    name = "Bûcheron";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Végétal", 15]]);

        this.initFamily(["Elfe"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(5);

        this.text = Text;
    };

    otherPerishEffect = (card: Card) => {
        if (this.isArea("Terrain") && card.isElement("Végétal")) {
            this.owner().ressource("Végétal").stock(2);
        }
    };
};