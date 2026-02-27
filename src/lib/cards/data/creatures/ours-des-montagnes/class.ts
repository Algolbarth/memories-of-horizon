import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';

export class OursDesMontagnes extends Creature {
    name = "Ours des montagnes";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Terre", 20]]);

        this.initFamily(["Bête"]);

        this.stat("Constitution").init(35);
        this.stat("Force").init(35);
        this.stat("Endurance").init(5);
    };
};