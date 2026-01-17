import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Renard extends Creature {
    name = "Renard";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Végétal", 8]]);

        this.families.base.push("Bête");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);
        this.stat("Intelligence").init(2);
    };
};