import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';

export class TourDeMage extends Building {
    name = "Tour de mage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);
        this.stat("Santé").base = 20;
        this.stat("Santé").current = 20;
        this.stat("Magie").base = 5;
    };
}