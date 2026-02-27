import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';

export class Pelle extends Equipment {
    name = "Pelle";

    constructor(system: System) {
        super(system);

        this.init([["Or", 18], ["Terre", 18]]);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain")) {
            let readCondition = (card: Card) => {
                if (card.isElement("Terre")) {
                    return true;
                }
                return false;
            };
            this.owner().discover(1, readCondition);

            this.owner().ressource("Terre").produce(10);
        }
    };
};