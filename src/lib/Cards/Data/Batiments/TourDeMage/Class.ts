import type { System } from '../../../../System/Class';
import { Batiment } from '../../../Class/Batiment';

export class TourDeMage extends Batiment {
    name = "Tour de mage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);
        this.stat("Vie").base = 20;
        this.stat("Vie").current = 20;
        this.stat("Magie").base = 5;
    };
}