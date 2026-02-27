import type { System } from '../../../../system/class';
import { Building } from '../../../class/building';

export class Barricade extends Building {
    name = "Barricade";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.stat("Constitution").init(20);
    };
};