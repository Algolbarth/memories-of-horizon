import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class BonhommeBiscuit extends Creature {
    name = "Bonhomme biscuit";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.initFamily(["Nourriture"]);

        this.stat("Constitution").init(1);
        this.stat("Force").init(1);

        this.text = Text;
    };

    targetEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card.isFamily("Nourriture")) {
            this.stat("Constitution").increase(5);
            this.stat("Force").increase(5);
        }
    };
};