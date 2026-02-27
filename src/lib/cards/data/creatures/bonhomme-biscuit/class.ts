import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

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
        if (this.isArea("Terrain") && card.isFamily("Nourriture")) {
            this.stat("Constitution").increase(5);
            this.stat("Force").increase(5);
        }
    };
};