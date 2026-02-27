import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';

export class Renard extends Creature {
    name = "Renard";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Végétal", 8]]);

        this.initFamily(["Bête"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);
        this.stat("Intelligence").init(2);
    };
};