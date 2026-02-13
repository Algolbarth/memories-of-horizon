import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';
import { Creature } from '../../../Class/Creature';

export class Bivouac extends Building {
    name = "Bivouac";

    constructor(system: System) {
        super(system);

        this.init([["Or", 110]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.zone.name == "Terrain") {
            let battlefield = copy(this.zone.cards);
            for (const card of battlefield) {
                if (card instanceof Creature) {
                    card.heal(10);
                }
            }
        }
    };
};