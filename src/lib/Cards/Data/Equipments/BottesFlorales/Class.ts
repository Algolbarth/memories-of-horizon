import type { System } from '../../../../System/Class';
import { copy } from '../../../../Utils';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class BottesFlorales extends Equipment {
    name = "Bottes florales";

    constructor(system: System) {
        super(system);

        this.init([["Or", 18], ["Végétal", 18]]);

        this.equipStat("Vitesse").init(2);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            let battlefield = copy(this.owner.zone("Terrain").cards);
            for (const card of battlefield) {
                if (card.isElement("Végétal")) {
                    this.owner.ressource("Végétal").produce(1);
                }
            }
        }
    };
};