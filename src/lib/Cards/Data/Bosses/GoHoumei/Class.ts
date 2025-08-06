import type { System } from '../../../../System/Class';
import { Boss } from '../../../Class/Boss';

export class GoHoumei extends Boss {
    name = "Go Houmei, reine des tours";

    constructor(system: System) {
        super(system);

        this.level = 6;
        this.elements.base = ["Terre"];
        this.familles.base.push("Nain");

        this.stat("Attaque").base = 25;
        this.stat("Vie").base = 500;
        this.stat("Vie").current = 500;
    };
}