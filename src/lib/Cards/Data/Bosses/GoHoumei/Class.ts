import type { System } from '../../../../System/Class';
import { Boss } from '../../../Class/Boss';

export class GoHoumei extends Boss {
    name = "Go Houmei, reine des tours";

    constructor(system: System) {
        super(system);

        this.level = 6;
        this.elements.base = ["Terre"];
        this.familles.base.push("Nain");

        this.stat("Force").init(50);
        this.stat("Constitution").init(250);
    };
}