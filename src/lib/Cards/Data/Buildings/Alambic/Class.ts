import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class Alambic extends Building {
    name = "Alambic";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);
        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            let reserve = copy(this.owner.zone("Réserve").cards);
            for (const card of reserve) {
                if (card.type == "Objet" && card.familles.total().includes("Potion")) {
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
}