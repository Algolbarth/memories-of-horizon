import { Equipment } from '../Equipement';
import Text from './Text.svelte';

export class SacEnToile extends Equipment {
    name = "Sac en toile";

    constructor(system) {
        super(system);

        this.init([["Or", 5]]);

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            this.owner.draw(1);
        }
    };
}