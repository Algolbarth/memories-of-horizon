import type { System } from '../../../System/Class';
import { Unit } from '../../Class';

export class Batiment extends Unit {
    type = "Bâtiment";

    constructor(system:System) {
        super(system);

        this.stat("Actions").base = 0;
    }
}