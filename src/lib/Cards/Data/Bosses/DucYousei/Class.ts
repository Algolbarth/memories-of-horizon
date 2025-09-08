import type { System } from '../../../../System/Class';
import { Boss } from '../../../Class/Boss';

export class DucYousei extends Boss {
    name = "Duc Yousei";

    constructor(system: System) {
        super(system);

        this.level = 8;
        this.elements.base = ["Feu"];
        this.familles.base.push("Gobelin");

        this.stat("Force").base = 10;
        this.stat("Santé").base = 50;
        this.stat("Santé").current = 50;
    };
}