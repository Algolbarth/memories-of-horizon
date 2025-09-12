import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Grenouille extends Creature {
    name = "Grenouille";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5], ["Eau", 5]]);

        this.stat("Constitution").init(5);
        this.stat("Force").base = 5;
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.move("Réserve");
        }
    };
}