import { copy } from '../../../../Utils';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class ChefBarbare extends Creature {
    name = "Chef barbare";

    constructor(system) {
        super(system);

        this.init([["Or", 150]]);
        this.familles.base.push("Humain");

        this.stat("Vie").base = 50;
        this.stat("Vie").current = 50;
        this.stat("Attaque").base = 50;

        this.text = Text;
    };

    fightEffect = function () {
        let terrain = copy(this.owner.zone("Terrain").cards);
        for (const card of terrain) {
            if (card.type == "Créature") {
                card.stat("Attaque").add += 5;
            }
        }
    };
}