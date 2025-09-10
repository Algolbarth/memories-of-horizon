import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Guerrier extends Creature {
    name = "Guerrier";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);
        this.familles.base.push("Humain");

        this.stat("Constitution").init(10);
        this.stat("Force").base = 10;
        this.stat("Endurance").base = 5;
    };
}