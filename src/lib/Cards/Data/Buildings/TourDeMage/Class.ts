import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';

export class TourDeMage extends Building {
    name = "Tour de mage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.initFamily(["Mage"]);

        this.stat("Constitution").init(20);
        this.stat("Magie").init(5);
    };
};