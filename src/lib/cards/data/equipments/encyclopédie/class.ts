import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Action } from '../../../class/action';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';

export class Encyclopedie extends Equipment {
    name = "Encyclopédie";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.equipStat("Intelligence").init(2);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain")) {
            let readCondition = (card: Card) => {
                if (card instanceof Action) {
                    return true;
                }
                return false;
            };
            this.owner().draw(1, readCondition);
        }
    };
};