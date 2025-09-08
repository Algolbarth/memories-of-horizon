import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Prince extends Creature {
    name = "Prince";

    constructor(system: System) {
        super(system);

        this.init([["Or", 110]]);
        this.familles.base.push("Humain");

        this.stat("Santé").base = 10;
        this.stat("Santé").current = 10;
        this.stat("Force").base = 10;

        this.text = Text;
    };

    useEffect = function () {
        let terrain = copy(this.owner.zone("Terrain").cards);
        for (const card of terrain) {
            if (card.type == "Créature") {
                this.stat("Force").add += 10;
                this.stat("Santé").current += 10;
                this.stat("Santé").add += 10;
            }
        }
        this.move("Terrain");
        this.pose();
    };
}