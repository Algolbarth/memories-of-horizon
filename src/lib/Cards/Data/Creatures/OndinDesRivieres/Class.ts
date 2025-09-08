import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class OndinDesRivieres extends Creature {
    name = "Ondin des rivières";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Eau", 12]]);
        this.familles.base.push("Ondin");

        this.stat("Santé").base = 5;
        this.stat("Santé").current = 5;
        this.stat("Force").base = 5;

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            this.owner.ressource("Eau").current += 10;
        }
    };
}