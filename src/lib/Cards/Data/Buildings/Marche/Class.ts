import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class Marche extends Building {
    name = "Marché";

    constructor(system: System) {
        super(system);

        this.init([["Or", 110]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            let reserve = copy(this.owner.zone("Pile").cards);
            for (const card of reserve) {
                card.getCost("Or").decrease(5);
            }
        }
    };
};