import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Lion extends Creature {
    name = "Lion";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30], ["Feu", 30]]);
        this.familles.base.push("Bête");

        this.stat("Santé").base = 20;
        this.stat("Santé").current = 20;
        this.stat("Force").base = 20;

        this.text = Text;
    };

    useEffect = function () {
        let terrain = copy(this.owner.zone("Terrain").cards);
        for (const card of terrain) {
            if (card.type == "Créature" && card.familles.total().includes("Bête")) {
                card.stat("Force").add += 5;
                card.stat("Santé").current += 5;
                card.stat("Santé").add += 5;
            }
        }
        this.move("Terrain");
        this.pose();
    };
}