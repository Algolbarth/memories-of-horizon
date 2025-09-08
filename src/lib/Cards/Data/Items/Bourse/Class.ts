import type { System } from '../../../../System/Class';
import { Objet } from '../../../Class/Item';
import Text from './Text.svelte';

export class Bourse extends Objet {
    name = "Bourse";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);
        this.getSale("Or").base = 0;

        this.text = Text;
    };

    canUse = function () {
        return false;
    };

    startStepEffect = function () {
        if (this.zone.name == "Main") {
            this.getSale("Or").add += 5;
        }
    };
}