import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Homonculus extends Creature {
    name = "Homonculus";

    constructor(system: System) {
        super(system);

        this.level = 1;

        this.trait("Rare").base = true;

        this.stat("Constitution").init(1);
        this.stat("Force").base = 0;
    };
}