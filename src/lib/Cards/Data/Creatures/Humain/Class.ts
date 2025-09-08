import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Humain extends Creature {
    name = "Humain";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);
        this.familles.base.push("Humain");

        this.stat("Santé").base = 5;
        this.stat("Santé").current = 5;
        this.stat("Force").base = 5;
    };
}