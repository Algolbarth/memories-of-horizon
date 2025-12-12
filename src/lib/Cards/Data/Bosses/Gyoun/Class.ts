import type { System } from '../../../../System/Class';
import { Boss } from '../../../Class/Boss';

export class Gyoun extends Boss {
    name = "Gyoun, colosse de jade";

    constructor(system: System) {
        super(system);

        this.level = 10;
        this.elements.base = ["Végétal"];
        this.familles.base.push("Elfe");

        this.stat("Force").init(100);
        this.stat("Constitution").init(1000);
    };
}