import { Equipment } from '../Equipement';
import Text from './Text.svelte';

export class AnneauEnOr extends Equipment {
    name = "Anneau en or";

    constructor(system) {
        super(system);

        this.init([["Or", 3]]);

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            this.bearer.stat("Attaque").add += 1;
            this.bearer.stat("Vie").current += 1;
            this.bearer.stat("Vie").add += 1;
        }
    };
}