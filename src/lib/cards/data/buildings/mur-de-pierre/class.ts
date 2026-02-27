import type { System } from '../../../../system/class';
import { Building } from '../../../class/building';

export class MurDePierre extends Building {
    name = "Mur de pierre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Terre", 12]]);

        this.stat("Constitution").init(30);
        this.stat("Endurance").init(10);
    };
};