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

        this.stat("Constitution").init(20);
        this.stat("Force").base = 20;

        this.text = Text;
    };

    useEffect = function () {
        let terrain = copy(this.owner.zone("Terrain").cards);
        for (const card of terrain) {
            if (card.type == "Créature" && card.familles.total().includes("Bête")) {
                card.stat("Force").increase(5);
                card.stat("Vitalité").increase(5);
                card.stat("Santé").increase(5);
            }
        }
        this.move("Terrain");
        this.pose();
    };
}