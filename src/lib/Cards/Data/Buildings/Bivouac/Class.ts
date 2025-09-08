import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class Bivouac extends Building {
    name = "Bivouac";

    constructor(system: System) {
        super(system);

        this.init([["Or", 110]]);
        this.stat("Santé").base = 20;
        this.stat("Santé").current = 20;

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            let terrain = copy(this.zone.cards);
            for (const card of terrain) {
                if (card.type == "Créature") {
                    card.heal(10);
                }
            }
        }
    };
}