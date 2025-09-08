import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';

export class Epouvantail extends Building {
    name = "Épouvantail";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);
        this.stat("Santé").base = 1;
        this.stat("Santé").current = 1;
        this.stat("Protection").base = 2;
    };
}