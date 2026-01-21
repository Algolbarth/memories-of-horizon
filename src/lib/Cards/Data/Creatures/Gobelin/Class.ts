import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Gobelin extends Creature {
    name = "Gobelin";

    constructor(system: System) {
        super(system);

        this.init([["Or", 3], ["Feu", 2]]);

        this.initFamily(["Gobelin"]);

        this.stat("Constitution").init(3);
        this.stat("Force").init(10);
    };
};