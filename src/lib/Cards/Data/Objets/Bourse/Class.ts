import type { System } from '../../../../System/Class';
import { Objet } from '../../../Class/Objet';
import Text from './Text.svelte';

export class Bourse extends Objet {
    name = "Bourse";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone.name == "Main") {
            this.getVente("Or").add += 5;
        }
    };
}