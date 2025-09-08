import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Doyen extends Creature {
    name = "Doyen";

    constructor(system: System) {
        super(system);

        this.init([["Or", 55], ["Végétal", 55]]);
        this.familles.base.push("Elfe");

        this.stat("Santé").base = 15;
        this.stat("Santé").current = 15;
        this.stat("Force").base = 5;

        this.text = Text;
    };

    useEffect = function () {
        let terrain = copy(this.owner.zone("Terrain").cards);
        for (const card of terrain) {
            if (card.type == "Créature") {
                card.stat("Santé").current += 15;
                card.stat("Santé").add += 15;
            }
        }
        this.move("Terrain");
        this.pose();
    };
}