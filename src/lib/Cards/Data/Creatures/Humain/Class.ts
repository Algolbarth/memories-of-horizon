import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Humain extends Creature {
    name = "Humain";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);
        this.families.base.push("Humain");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);
    };
}