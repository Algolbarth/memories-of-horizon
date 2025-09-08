import type { System } from '../../../../System/Class';
import { Batiment } from '../../../Class/Building';

export class MurDePierre extends Batiment {
    name = "Mur de pierre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Terre", 12]]);
        this.stat("Santé").base = 50;
        this.stat("Santé").current = 50;
    };
}