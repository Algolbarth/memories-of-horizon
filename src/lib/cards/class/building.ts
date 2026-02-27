import type { System } from '../../system/class';
import { Unit } from '.';

export class Building extends Unit {
    type = "Bâtiment";

    constructor(system: System) {
        super(system);

        this.stat("Initiative").init(0);
        this.stat("Maîtrise").init(0);
    };
};