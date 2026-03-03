import { copy } from '$lib/utils';
import type { System } from '$lib/system/class';
import { Building } from '$lib/cards/class/building';
import Text from './text.svelte';
import { Creature } from '$lib/cards/class/creature';

export class Bivouac extends Building {
    name = "Bivouac";

    constructor(system: System) {
        super(system);

        this.init([["Or", 110]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            let battlefield = copy(this.owner().zone("Terrain").cards);
            for (const card of battlefield) {
                if (card instanceof Creature) {
                    card.heal(10);
                }
            }
        }
    };
};