import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Batiment } from '../../../Class/Batiment';
import Text from './Text.svelte';

export class Alambic extends Batiment {
    name = "Alambic";

    constructor(system: System) {
        super(system);

        this.init([["Or", 110]]);
        this.stat("Vie").base = 20;
        this.stat("Vie").current = 20;

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            let hand = copy(this.owner.zone("Main").cards);
            for (const card of hand) {
                if (card.type == "Objet" && card.familles.total().includes("Potion")) {
                    if (card.name == "Concoction") {
                        for (const stat of card.stats) {
                            if (stat.name.includes("Infusion") && stat.value() > 0) {
                                card.stat(stat.name).add += 1;
                            }
                        }
                    }
                    else {
                        card.stat("Infusion").add += 1;
                    }
                }
            }
        }
    };
}