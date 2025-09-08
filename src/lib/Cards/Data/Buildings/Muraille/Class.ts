import type { System } from '../../../../System/Class';
import { Batiment } from '../../../Class/Building';

export class Muraille extends Batiment {
    name = "Muraille";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);
        this.stat("Santé").base = 200;
        this.stat("Santé").current = 200;
    };
}