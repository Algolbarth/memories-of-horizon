import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Renard extends Creature {
    name = "Renard";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Végétal", 8]]);
        this.familles.base.push("Bête");

        this.stat("Santé").base = 5;
        this.stat("Santé").current = 5;
        this.stat("Force").base = 5;
        this.stat("Intelligence").base = 2;
    };
}