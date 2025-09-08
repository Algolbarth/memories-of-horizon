import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Tortue extends Creature {
    name = "Tortue";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Eau", 8]]);
        this.familles.base.push("Reptile");

        this.stat("Santé").base = 15;
        this.stat("Santé").current = 15;
        this.stat("Force").base = 5;
        this.stat("Endurance").base = 5;
    };
}