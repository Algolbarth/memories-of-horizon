import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Chimere extends Creature {
    name = "Chimère";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);
        this.familles.base.push("Bête", "Reptile");

        this.stat("Constitution").init(20);
        this.stat("Force").base = 20;

        this.text = Text;
    };

    useEffect = function () {
        let list = [];
        let terrain = copy(this.owner.zone("Terrain").cards);

        for (const card of terrain) {
            if (card.type == "Créature") {
                for (const famille of card.familles.total()) {
                    if (!list.includes(famille)) {
                        list.push(famille);
                    }
                }
            }
        }

        this.stat("Constitution").increase(10 * list.length);
        this.stat("Force").increase(10 * list.length);

        this.move("Terrain");
        this.pose();
    };
}