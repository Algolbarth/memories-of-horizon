import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';

export class Chien extends Creature {
    name = "Chien";

    constructor(system: System) {
        super(system);

        this.init([["Or", 3]]);

        this.initFamily(["Bête"]);

        this.stat("Constitution").init(3);
        this.stat("Force").init(3);
    };
};