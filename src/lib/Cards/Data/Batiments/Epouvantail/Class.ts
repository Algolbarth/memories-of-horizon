import type { System } from '../../../../System/Class';
import { Batiment } from '../../../Class/Batiment';

export class Epouvantail extends Batiment {
    name = "Épouvantail";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);
        this.stat("Vie").base = 1;
        this.stat("Vie").current = 1;
        this.stat("Protection").base = 2;
    };
}