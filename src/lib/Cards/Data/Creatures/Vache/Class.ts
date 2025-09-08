import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Vache extends Creature {
    name = "Vache";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8]]);
        this.familles.base.push("Bête");

        this.stat("Santé").base = 10;
        this.stat("Santé").current = 10;
        this.stat("Force").base = 5;
    };
}