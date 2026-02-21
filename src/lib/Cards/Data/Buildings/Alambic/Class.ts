import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';
import { Item } from '../../../Class/Item';

export class Alambic extends Building {
    name = "Alambic";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            let reserve = copy(this.owner().zone("Inventaire").cards);
            for (const card of reserve) {
                if (card instanceof Item && card.isFamily("Potion")) {
                    if (card.name == "Concoction") {
                        for (const stat of card.stats) {
                            if (stat.name.includes("Infusion") && stat.value() > 0) {
                                card.stat(stat.name).increase(1);
                            }
                        }
                    }
                    else {
                        card.stat("Infusion").increase(1);
                    }
                }
            }
        }
    };
};