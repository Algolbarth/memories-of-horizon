import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

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