import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class ChefBarbare extends Creature {
    name = "Chef barbare";

    constructor(system: System) {
        super(system);

        this.init([["Or", 150]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(50);
        this.stat("Force").init(50);

        this.text = Text;
    };

    fightEffect = () => {
        let battlefield = copy(this.owner.zone("Terrain").cards);
        for (const card of battlefield) {
            if (card instanceof Creature) {
                card.stat("Force").increase(5);
            }
        }
    };
};