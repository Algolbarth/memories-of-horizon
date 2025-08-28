import type { System } from '../../../../System/Class';
import { Batiment } from '../../../Class/Batiment';

export class MurDEnceinte extends Batiment {
    name = "Mur d'enceinte";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);
        this.stat("Vie").base = 100;
        this.stat("Vie").current = 100;
    };
}