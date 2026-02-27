import type { System } from '../../../../system/class';
import { Building } from '../../../class/building';

export class Epouvantail extends Building {
    name = "Épouvantail";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.stat("Constitution").init(10);
        this.stat("Protection").init(2);
    };
};