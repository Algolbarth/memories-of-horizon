import type { System } from '../../../../system/class';
import { Building } from '../../../class/building';

export class MurDEnceinte extends Building {
    name = "Mur d'enceinte";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.stat("Constitution").init(100);
    };
};