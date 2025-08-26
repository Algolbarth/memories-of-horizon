import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class MageDesEaux extends Creature {
    name = "Mage des eaux";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Eau", 20]]);
        this.familles.base.push("Ondin");

        this.stat("Vie").base = 5;
        this.stat("Vie").current = 5;
        this.stat("Attaque").base = 5;
        this.stat("Magie").base = 5;

        this.text = Text;
    };

    otherPoseEffect = function (c: Card) {
        if (this.zone.name == "Terrain" && c.familles.total().includes("Sort") && c.owner == this.owner) {
            let condition = function (card: Card) {
                if (card.familles.total().includes("Sort")) {
                    return true;
                }
                return false;
            };

            let cards = this.owner.draw(1, condition);

            if (cards[0] != undefined && this.owner.ressource("Mana").total() >= 5) {
                this.owner.ressource("Mana").spend(5);
                cards[0].costReduce(5);
            }
        }
    };
}