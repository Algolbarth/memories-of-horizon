import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Doyen extends Creature {
    name = "Doyen";

    constructor(system: System) {
        super(system);

        this.init([["Or", 55], ["Végétal", 55]]);
        this.families.base.push("Elfe");

        this.stat("Constitution").init(15);
        this.stat("Force").init(5);

        this.text = Text;
    };

    useEffect = () => {
        let land = copy(this.owner.zone("Terrain").cards);
        for (const card of land) {
            if (card.type == "Créature") {
                card.stat("Constitution").increase(15);
            }
        }
        this.move("Terrain");
        this.pose();
    };
}