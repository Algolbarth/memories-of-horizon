import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Soldat extends Creature {
    name = "Soldat";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.families.base.push("Humain");

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);
    };
};