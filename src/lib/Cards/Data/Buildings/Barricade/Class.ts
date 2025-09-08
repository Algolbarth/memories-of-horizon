import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';

export class Barricade extends Building {
    name = "Barricade";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);
        this.stat("Santé").base = 20;
        this.stat("Santé").current = 20;
    };
}