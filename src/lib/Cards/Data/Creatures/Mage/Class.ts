import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Mage extends Creature {
    name = "Mage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);
        this.stat("Magie").init(5);
    };
};