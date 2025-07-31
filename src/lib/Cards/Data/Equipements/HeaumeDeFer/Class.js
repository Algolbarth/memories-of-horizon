import { Equipment } from '../../../Class/Equipement';
import Text from './Text.svelte';

export class HeaumeDeFer extends Equipment {
    name = "Heaume de fer";

    constructor(system) {
        super(system);

        this.init([["Or", 25]]);
        this.familles.base.push("Armure");

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            this.bearer.stat("Garde").fix(25);
        }
    };
}