import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class SeigneurOndin extends Creature {
    name = "Seigneur ondin";

    constructor(system: System) {
        super(system);

        this.init([["Or", 55], ["Eau", 55]]);

        this.families.base.push("Ondin");

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);

        this.text = Text;
    };

    useEffect = () => {
        let land = copy(this.owner.zone("Terrain").cards);
        for (const card of land) {
            if (card.type == "Créature") {
                this.owner.ressource("Eau").current += 5;
                card.stat("Constitution").increase(5);
                card.stat("Force").increase(5);
            }
        }
        this.move("Terrain");
        this.pose();
    };
};