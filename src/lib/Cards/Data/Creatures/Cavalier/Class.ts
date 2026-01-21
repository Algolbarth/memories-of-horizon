import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Cavalier extends Creature {
    name = "Cavalier";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);
        this.stat("Vitesse").init(1);
    };
};