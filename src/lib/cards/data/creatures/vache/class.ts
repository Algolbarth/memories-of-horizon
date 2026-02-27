import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';

export class Vache extends Creature {
    name = "Vache";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8]]);

        this.initFamily(["Bête"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(5);
    };
};