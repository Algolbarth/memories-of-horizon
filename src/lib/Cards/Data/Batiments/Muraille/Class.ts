import type { System } from '../../../../System/Class';
import { Batiment } from '../../../Class/Batiment';

export class Muraille extends Batiment {
    name = "Muraille";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);
        this.stat("Vie").base = 200;
        this.stat("Vie").current = 200;
    };
}