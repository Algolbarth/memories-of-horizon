import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';

export class LoupGris extends Creature {
    name = "Loup gris";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8]]);

        this.initFamily(["Bête"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(10);
    };
};