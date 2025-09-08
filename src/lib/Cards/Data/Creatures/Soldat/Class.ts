import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Soldat extends Creature {
    name = "Soldat";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);
        this.familles.base.push("Humain");

        this.stat("Santé").base = 10;
        this.stat("Santé").current = 10;
        this.stat("Force").base = 10;
    };
}