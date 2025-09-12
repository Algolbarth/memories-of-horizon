import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class ChefBarbare extends Creature {
    name = "Chef barbare";

    constructor(system: System) {
        super(system);

        this.init([["Or", 150]]);
        this.familles.base.push("Humain");

        this.stat("Constitution").init(50);
        this.stat("Force").base = 50;

        this.text = Text;
    };

    fightEffect = () => {
        let terrain = copy(this.owner.zone("Terrain").cards);
        for (const card of terrain) {
            if (card.type == "Créature") {
                card.stat("Force").increase(5);
            }
        }
    };
}