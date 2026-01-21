import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class MageDesEaux extends Creature {
    name = "Mage des eaux";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Eau", 20]]);

        this.initFamily(["Ondin"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);
        this.stat("Magie").init(5);

        this.text = Text;
    };

    otherPoseEffect = (c: Card) => {
        if (this.zone.name == "Terrain" && c.isFamily("Sort") && c.owner == this.owner) {
            let read_condition = (card: Card) => {
                if (card.isFamily("Sort")) {
                    return true;
                }
                return false;
            };

            let cards = this.owner.draw(1, read_condition);

            if (cards[0] != undefined && this.owner.ressource("Mana").total() >= 5) {
                this.owner.ressource("Mana").spend(5);
                cards[0].costReduce(10);
            }
        }
    };
};