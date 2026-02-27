import type { System } from '../../../../system/class';
import { Building } from '../../../class/building';

export class Muraille extends Building {
    name = "Muraille";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.stat("Constitution").init(200);
    };
};