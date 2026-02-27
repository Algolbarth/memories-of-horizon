import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';

export class Homonculus extends Creature {
    name = "Homonculus";

    constructor(system: System) {
        super(system);

        this.level = 1;

        this.trait("Rare").init(true);

        this.stat("Constitution").init(1);
        this.stat("Force").init(0);
    };
};