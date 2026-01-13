import type { System } from '../../../../System/Class';
import { Boss } from '../../../Class/Boss';

export class DucYousei extends Boss {
    name = "Duc Yousei";

    constructor(system: System) {
        super(system);

        this.level = 8;
        this.elements.base = ["Feu"];
        this.families.base.push("Gobelin");

        this.stat("Force").init(75);
        this.stat("Constitution").init(500);
    };
}