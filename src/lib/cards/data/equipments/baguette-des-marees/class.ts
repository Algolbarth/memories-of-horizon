import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';

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
        if (this.bearer != undefined && this.bearer.isArea("Terrain")) {
            this.owner().ressource("Eau").produce(this.bearer.stat("Magie").value());
        }
    };
};