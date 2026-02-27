import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class MageDesEaux extends Creature {
    name = "Mage des eaux";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Eau", 20]]);

        this.initFamily(["Ondin", "Mage"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);
        this.stat("Magie").init(5);

        this.text = Text;
    };

    otherPoseEffect = (c: Card) => {
        if (this.isArea("Terrain") && c.isFamily("Sort") && this.isAlly(c)) {
            let readCondition = (card: Card) => {
                if (card.isFamily("Sort")) {
                    return true;
                }
                return false;
            };

            let cards = this.owner().draw(1, readCondition);

            if (cards[0] != undefined && this.owner().ressource("Mana").total() >= 5) {
                this.owner().ressource("Mana").spend(5);
                cards[0].costReduce(10);
            }
        }
    };
};