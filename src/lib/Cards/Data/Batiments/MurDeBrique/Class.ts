import type { System } from '../../../../System/Class';
import { Batiment } from '../../../Class/Batiment';

export class MurDeBrique extends Batiment {
    name = "Mur de brique";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);
        this.stat("Vie").base = 50;
        this.stat("Vie").current = 50;
    };
}