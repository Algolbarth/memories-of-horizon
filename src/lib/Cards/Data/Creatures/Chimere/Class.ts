import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Chimere extends Creature {
    name = "Chimère";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.families.base.push("Bête", "Reptile");

        this.stat("Constitution").init(20);
        this.stat("Force").init(20);

        this.text = Text;
    };

    useEffect = () => {
        let family_list: string[] = [];
        let land = copy(this.owner.zone("Terrain").cards);

        for (const card of land) {
            if (card.type == "Créature") {
                for (const family of card.families.total()) {
                    if (!family_list.includes(family)) {
                        family_list.push(family);
                    }
                }
            }
        }

        this.stat("Constitution").increase(10 * family_list.length);
        this.stat("Force").increase(10 * family_list.length);

        this.move("Terrain");
        this.pose();
    };
};