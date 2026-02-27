import type { System } from '../../../../system/class';
import { Boss } from '../../../class/boss';

export class Godrick extends Boss {
    name = "Godrick, roi des rois";

    constructor(system: System) {
        super(system);

        this.level = 14;
        this.elements.base = ["Neutre"];
        this.initFamily(["Humain"]);

        this.stat("Force").init(400);
        this.stat("Constitution").init(4000);
    };
}