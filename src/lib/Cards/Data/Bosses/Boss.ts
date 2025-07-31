import type { System } from '../../../System/Class';
import { Creature } from '../Creatures/Creature';

export class Boss extends Creature {
    constructor(system: System) {
        super(system);

        this.trait("Légendaire").base = true;
    }
}