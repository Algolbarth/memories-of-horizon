import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class MageDeLaNature extends Creature {
    name = "Mage de la nature";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Végétal", 20]]);
        this.familles.base.push("Elfe");

        this.stat("Santé").base = 10;
        this.stat("Santé").current = 10;
        this.stat("Force").base = 5;
        this.stat("Magie").base = 5;

        this.text = Text;
    };

    otherPoseEffect = function (c: Card) {
        if (this.zone.name == "Terrain" && c.familles.total().includes("Sort") && c.owner == this.owner) {
            let condition = function (card: Card) {
                if (card.type == "Créature" && c.level == card.level) {
                    return true;
                }
                return false;
            };
            this.owner.draw(1, condition);
        }
    };
}