import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class SeigneurOndin extends Creature {
    name = "Seigneur ondin";

    constructor(system: System) {
        super(system);

        this.init([["Or", 55], ["Eau", 55]]);
        this.familles.base.push("Ondin");

        this.stat("Constitution").init(10);
        this.stat("Force").base = 10;

        this.text = Text;
    };

    useEffect = function () {
        let terrain = copy(this.owner.zone("Terrain").cards);
        for (const card of terrain) {
            if (card.type == "Créature") {
                this.owner.ressource("Eau").current += 5;
                card.stat("Constitution").increase(5);
                card.stat("Force").increase(5);
            }
        }
        this.move("Terrain");
        this.pose();
    };
}