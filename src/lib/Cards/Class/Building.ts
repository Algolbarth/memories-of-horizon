import type { System } from '../../System/Class';
import { Unit } from '.';

export class Building extends Unit {
    type = "Bâtiment";

    constructor(system: System) {
        super(system);

        this.stat("Initiative").base = 0;
        this.stat("Maîtrise").base = 0;
    }
}