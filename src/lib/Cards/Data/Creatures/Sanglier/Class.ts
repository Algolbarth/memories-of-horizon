import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Sanglier extends Creature {
    name = "Sanglier";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Végétal", 20]]);

        this.families.base.push("Bête");

        this.stat("Constitution").init(25);
        this.stat("Force").init(10);

        this.text = Text;
    };

    useEffect = () => {
        let land = copy(this.owner.zone("Terrain").cards);
        for (const card of land) {
            if (card.type == "Créature" && card.families.total().includes("Bête")) {
                this.stat("Force").increase(5);
            }
        }

        this.move("Terrain");
        this.pose();
    };
};