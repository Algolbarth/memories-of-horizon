import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class GuerrierGeant extends Creature {
    name = "Guerrier géant";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.initFamily(["Géant"]);

        this.stat("Constitution").init(75);
        this.stat("Force").init(75);
        this.stat("Endurance").init(25);
    };
};