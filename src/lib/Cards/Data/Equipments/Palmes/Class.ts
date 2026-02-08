import type { System } from '../../../../System/Class';
import { copy } from '../../../../Utils';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class Palmes extends Equipment {
    name = "Palmes";

    constructor(system: System) {
        super(system);

        this.init([["Or", 18], ["Eau", 18]]);

        this.equipStat("Vitesse").init(2);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            let battlefield = copy(this.owner.zone("Terrain").cards);
            for (const card of battlefield) {
                if (card.isElement("Eau")) {
                    this.owner.ressource("Eau").produce(1);
                }
            }
        }
    };
};