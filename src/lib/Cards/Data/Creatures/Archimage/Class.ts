import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Archimage extends Creature {
    name = "Archimage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);
        this.familles.base.push("Humain");

        this.stat("Constitution").init(50);
        this.stat("Force").base = 50;
        this.stat("Magie").base = 25;
    };
}