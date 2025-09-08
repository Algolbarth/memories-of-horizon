import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';

export class MurDEnceinte extends Building {
    name = "Mur d'enceinte";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);
        this.stat("Santé").base = 100;
        this.stat("Santé").current = 100;
    };
}