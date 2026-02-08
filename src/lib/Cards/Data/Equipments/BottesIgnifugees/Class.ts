import type { System } from '../../../../System/Class';
import { copy } from '../../../../Utils';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class BottesIgnifugees extends Equipment {
    name = "Bottes ignifugées";

    constructor(system: System) {
        super(system);

        this.init([["Or", 18], ["Feu", 18]]);

        this.equipStat("Vitesse").init(2);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            let battlefield = copy(this.owner.zone("Terrain").cards);
            for (const card of battlefield) {
                if (card.isElement("Feu")) {
                    this.owner.ressource("Feu").produce(1);
                }
            }
        }
    };
};