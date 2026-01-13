import type { System } from '../../../../System/Class';
import { Boss } from '../../../Class/Boss';

export class Ballas extends Boss {
    name = "Ballas, suprémaciste";

    constructor(system: System) {
        super(system);

        this.level = 18;
        this.elements.base = ["Eau"];
        this.families.base.push("Ondin");

        this.stat("Force").init(800);
        this.stat("Constitution").init(15000);
    };
}