import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';

export class MurDeBrique extends Building {
    name = "Mur de brique";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);
        this.stat("Santé").base = 50;
        this.stat("Santé").current = 50;
    };
}