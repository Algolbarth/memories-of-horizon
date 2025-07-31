import { Equipment } from '../../../Class/Equipement';
import Text from './Text.svelte';

export class CasqueEnCuir extends Equipment {
    name = "Casque en cuir";

    constructor(system) {
        super(system);

        this.init([["Or", 5]]);
        this.familles.base.push("Armure");

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            this.bearer.stat("Garde").fix(5);
        }
    };
}