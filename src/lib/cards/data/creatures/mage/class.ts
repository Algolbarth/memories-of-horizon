import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';

export class Mage extends Creature {
    name = "Mage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.initFamily(["Humain", "Mage"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);
        this.stat("Magie").init(5);
    };
};