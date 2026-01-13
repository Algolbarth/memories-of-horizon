import type { System } from '../../../../System/Class';
import { Boss } from '../../../Class/Boss';

export class Kanki extends Boss {
    name = "Kanki, roi des bandits";

    constructor(system: System) {
        super(system);

        this.level = 4;
        this.elements.base = ["Neutre"];
        this.families.base.push("Humain");

        this.stat("Force").init(25);
        this.stat("Constitution").init(100);
    };
}