import type { System } from '../../../../system/class';
import { Building } from '../../../class/building';

export class MurDeRoche extends Building {
    name = "Mur de roche";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Terre", 25]]);

        this.stat("Constitution").init(50);
        this.stat("Endurance").init(25);
    };
};