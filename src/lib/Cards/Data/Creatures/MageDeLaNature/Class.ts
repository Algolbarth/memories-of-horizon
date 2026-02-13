import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class MageDeLaNature extends Creature {
    name = "Mage de la nature";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Végétal", 20]]);

        this.initFamily(["Elfe", "Mage"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(5);
        this.stat("Magie").init(5);

        this.text = Text;
    };

    otherPoseEffect = (c: Card) => {
        if (this.zone.name == "Terrain" && c.isFamily("Sort") && c.owner == this.owner) {
            let readCondition = (card: Card) => {
                if (card instanceof Creature && c.level == card.level) {
                    return true;
                }
                return false;
            };
            this.owner.draw(1, readCondition);
        }
    };
};