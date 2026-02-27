import type { System } from '../../../../system/class';
import { Building } from '../../../class/building';

export class MurDeBrique extends Building {
    name = "Mur de brique";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.stat("Constitution").init(50);
    };
};