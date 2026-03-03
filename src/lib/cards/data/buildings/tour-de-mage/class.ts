import type { System } from '$lib/system/class';
import { Building } from '$lib/cards/class/building';

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