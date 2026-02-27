import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';

export class Grimoire extends Equipment {
    name = "Grimoire";

    constructor(system: System) {
        super(system);

        this.init([["Or", 6]]);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain")) {
            let readCondition = (card: Card) => {
                if (card.isFamily("Sort")) {
                    return true;
                }
                return false;
            };
            this.owner().draw(1, readCondition);
        }
    };
};