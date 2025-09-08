import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Chien extends Creature {
    name = "Chien";

    constructor(system: System) {
        super(system);

        this.init([["Or", 3]]);
        this.familles.base.push("Bête");

        this.stat("Santé").base = 3;
        this.stat("Santé").current = 3;
        this.stat("Force").base = 3;
    };
}