import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Grenouille extends Creature {
    name = "Grenouille";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5], ["Eau", 5]]);

        this.stat("Santé").base = 5;
        this.stat("Santé").current = 5;
        this.stat("Force").base = 5;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            this.move("Main");
        }
    };
}