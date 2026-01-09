import type { System } from '../../../../System/Class';
import { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Iconoclaste extends Creature {
    name = "Iconoclaste";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Feu", 10]]);
        this.familles.base.push("Gobelin");

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);

        this.text = Text;
    };

    otherDestroyEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card.owner == this.owner && card.zone.name == "Pile") {
            this.stat("Constitution").increase(1);
            this.stat("Force").increase(1);
        }
    };
};