import type { System } from '../../../../system/class';
import { Boss } from '../../../class/boss';

export class Kanki extends Boss {
    name = "Kanki, roi des bandits";

    constructor(system: System) {
        super(system);

        this.level = 4;
        this.elements.base = ["Neutre"];
        this.initFamily(["Humain"]);

        this.stat("Force").init(25);
        this.stat("Constitution").init(100);
    };
}