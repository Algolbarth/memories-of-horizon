import type { System } from '../../../../System/Class';
import { Batiment } from '../../../Class/Building';

export class Barricade extends Batiment {
    name = "Barricade";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);
        this.stat("Santé").base = 20;
        this.stat("Santé").current = 20;
    };
}