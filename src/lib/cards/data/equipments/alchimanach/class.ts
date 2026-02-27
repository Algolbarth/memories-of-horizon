import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';

export class Alchimanach extends Equipment {
    name = "Alchimanach";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain")) {
            let readCondition = (card: Card) => {
                if (card.isFamily("Potion")) {
                    return true;
                }
                return false;
            };
            let cards = this.owner().draw(1, readCondition);

            if (cards[0] != undefined) {
                cards[0].stat("Infusion").increase(15);
            }
        }
    };
};