import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Tortue extends Creature {
    name = "Tortue";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Eau", 8]]);

        this.families.base.push("Reptile");

        this.stat("Constitution").init(15);
        this.stat("Force").init(5);
        this.stat("Endurance").init(5);
    };
};