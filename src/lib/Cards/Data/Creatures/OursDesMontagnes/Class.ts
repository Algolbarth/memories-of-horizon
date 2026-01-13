import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class OursDesMontagnes extends Creature {
    name = "Ours des montagnes";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Terre", 20]]);
        this.families.base.push("Bête");

        this.stat("Constitution").init(35);
        this.stat("Force").init(35);
        this.stat("Endurance").init(5);
    };
}