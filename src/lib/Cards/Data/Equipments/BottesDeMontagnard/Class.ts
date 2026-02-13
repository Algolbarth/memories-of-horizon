import type { System } from '../../../../System/Class';
import { copy } from '../../../../Utils';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class BottesDeMontagnard extends Equipment {
    name = "Bottes de montagnard";

    constructor(system: System) {
        super(system);

        this.init([["Or", 18], ["Terre", 18]]);

        this.equipStat("Vitesse").init(2);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            let battlefield = copy(this.owner.zone("Terrain").cards);
            for (const card of battlefield) {
                if (card.isElement("Terre")) {
                    this.owner.ressource("Terre").produce(1);
                }
            }
        }
    };
};