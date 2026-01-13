import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class BaguetteDesMarees extends Equipment {
    name = "Baguette des marées";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40], ["Eau", 40]]);
        this.families.base.push("Arme");

        this.equipStat("Magie").init(10);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            this.owner.ressource("Eau").current += this.bearer.stat("Magie").value();
        }
    };
}