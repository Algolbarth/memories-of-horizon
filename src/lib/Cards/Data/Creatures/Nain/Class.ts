import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Nain extends Creature {
    name = "Nain";

    constructor(system: System) {
        super(system);

        this.init([["Or", 4], ["Terre", 4]]);
        this.familles.base.push("Nain");

        this.stat("Santé").base = 5;
        this.stat("Santé").current = 5;
        this.stat("Force").base = 5;
        this.stat("Endurance").base = 3;
    };
}