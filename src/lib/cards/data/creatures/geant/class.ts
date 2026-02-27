import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';

export class Geant extends Creature {
    name = "Géant";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.initFamily(["Géant"]);

        this.stat("Constitution").init(50);
        this.stat("Force").init(50);
    };
};