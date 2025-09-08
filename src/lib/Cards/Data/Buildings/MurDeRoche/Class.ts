import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';

export class MurDeRoche extends Building {
    name = "Mur de roche";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Terre", 25]]);
        this.stat("Santé").base = 100;
        this.stat("Santé").current = 100;
    };
}