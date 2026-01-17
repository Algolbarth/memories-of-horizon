import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Cerf extends Creature {
    name = "Cerf";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Végétal", 20]]);

        this.families.base.push("Bête");

        this.stat("Constitution").init(10);
        this.stat("Force").init(15);

        this.text = Text;
    };

    useEffect = () => {
        let land = copy(this.owner.zone("Terrain").cards);
        for (const card of land) {
            if (card.type == "Créature" && card.families.total().includes("Bête")) {
                this.stat("Constitution").increase(5);
            }
        }

        this.move("Terrain");
        this.pose();
    };
};