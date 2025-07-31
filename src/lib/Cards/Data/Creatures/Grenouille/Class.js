import { Creature } from '../../../Class/Creature';

export class Grenouille extends Creature {
    name = "Grenouille";

    constructor(system) {
        super(system);

        this.init([["Or", 5], ["Eau", 5]]);

        this.stat("Vie").base = 5;
        this.stat("Vie").current = 5;
        this.stat("Attaque").base = 5;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            this.move("Main");
        }
    };
}