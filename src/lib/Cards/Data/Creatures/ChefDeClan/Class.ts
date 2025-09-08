import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class ChefDeClan extends Creature {
    name = "Chef de clan";

    constructor(system: System) {
        super(system);

        this.init([["Or", 55], ["Feu", 55]]);
        this.familles.base.push("Gobelin");

        this.stat("Santé").base = 10;
        this.stat("Santé").current = 10;
        this.stat("Force").base = 10;

        this.text = Text;
    };

    useEffect = function () {
        let terrain = copy(this.owner.zone("Terrain").cards);
        for (const card of terrain) {
            if (card.type == "Créature") {
                card.stat("Force").add += 20;
            }
        }
        this.move("Terrain");
        this.pose();
    };
}