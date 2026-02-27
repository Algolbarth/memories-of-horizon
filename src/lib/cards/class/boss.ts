import type { System } from '../../system/class';
import { Creature } from './creature';

export class Boss extends Creature {
    constructor(system: System) {
        super(system);

        this.trait("Légendaire").init(true);
    };
};