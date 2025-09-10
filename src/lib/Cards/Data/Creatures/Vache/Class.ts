import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Vache extends Creature {
    name = "Vache";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8]]);
        this.familles.base.push("Bête");

        this.stat("Constitution").init(10);
        this.stat("Force").base = 5;
    };
}