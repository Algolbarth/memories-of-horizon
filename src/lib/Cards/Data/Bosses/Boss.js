import { Creature } from '../Creatures/Creature.js';

export class Boss extends Creature {
    constructor(system) {
        super(system);

        this.trait("Légendaire").base = true;
    }
}