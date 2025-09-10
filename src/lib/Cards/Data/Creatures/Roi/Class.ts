import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Roi extends Creature {
    name = "Roi";

    constructor(system: System) {
        super(system);

        this.init([["Or", 110]]);
        this.familles.base.push("Humain");

        this.stat("Constitution").init(10);
        this.stat("Force").base = 10;

        this.text = Text;
    };

    useEffect = function () {
        let terrain = copy(this.owner.zone("Terrain").cards);
        for (const card of terrain) {
            if (card.type == "Créature") {
                card.stat("Constitution").increase(10);
                card.stat("Force").increase(10);
            }
        }
        this.move("Terrain");
        this.pose();
    };
}