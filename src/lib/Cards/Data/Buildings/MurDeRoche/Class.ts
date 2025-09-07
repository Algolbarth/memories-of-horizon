import type { System } from '../../../../System/Class';
import { Batiment } from '../../../Class/Building';

export class MurDeRoche extends Batiment {
    name = "Mur de roche";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Terre", 25]]);
        this.stat("Vie").base = 100;
        this.stat("Vie").current = 100;
    };
}