import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class TourDeSiege extends Building {
    name = "Tour de siège";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40]]);
        this.stat("Constitution").init(20);

        this.text = Text;
    };

    turnEffect = function () {
        if (this.zone.name == "Terrain") {
            let target = undefined;
            let terrain = copy(this.zone.cards);

            for (const card of terrain) {
                if (target == undefined && card.type == "Créature") {
                    target = card;
                }
            }

            if (target != undefined) {
                target.stat("Force").increase(10);
                target.stat("Constitution").increase(10);
            }
        }
    };
}