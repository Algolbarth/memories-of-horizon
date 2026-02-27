import type { System } from '../../../../system/class';
import { copy } from '../../../../utils';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';

export class BottesFlorales extends Equipment {
    name = "Bottes florales";

    constructor(system: System) {
        super(system);

        this.init([["Or", 18], ["Végétal", 18]]);

        this.equipStat("Vitesse").init(2);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain")) {
            let battlefield = copy(this.owner().zone("Terrain").cards);
            for (const card of battlefield) {
                if (card.isElement("Végétal")) {
                    this.owner().ressource("Végétal").produce(1);
                }
            }
        }
    };
};