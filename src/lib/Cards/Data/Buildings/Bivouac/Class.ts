import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class Bivouac extends Building {
    name = "Bivouac";

    constructor(system: System) {
        super(system);

        this.init([["Or", 110]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            let land = copy(this.zone.cards);
            for (const card of land) {
                if (card.type == "Créature") {
                    card.heal(10);
                }
            }
        }
    };
};