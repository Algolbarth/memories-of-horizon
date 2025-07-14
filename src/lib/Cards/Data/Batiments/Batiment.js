import { Unit } from '../../Unit.js';

export class Batiment extends Unit {
    type = "Bâtiment";

    constructor(system) {
        super(system);

        this.stat("Actions").base = 0;
    }
}