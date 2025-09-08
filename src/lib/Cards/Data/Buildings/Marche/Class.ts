import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Batiment } from '../../../Class/Building';
import Text from './Text.svelte';

export class Marche extends Batiment {
    name = "Marché";

    constructor(system: System) {
        super(system);

        this.init([["Or", 110]]);
        this.stat("Santé").base = 20;
        this.stat("Santé").current = 20;

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            let hand = copy(this.owner.zone("Boutique").cards);
            for (const card of hand) {
                card.getCout("Or").add -= 5;
            }
        }
    };
}