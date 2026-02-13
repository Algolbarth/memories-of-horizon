import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class BaguetteDesMarees extends Equipment {
    name = "Baguette des marées";

    constructor(system: System) {
        super(system);

        this.init([["Or", 45], ["Eau", 45]]);

        this.initFamily(["Arme"]);

        this.equipStat("Magie").init(10);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            this.owner.ressource("Eau").produce(this.bearer.stat("Magie").value());
        }
    };
};