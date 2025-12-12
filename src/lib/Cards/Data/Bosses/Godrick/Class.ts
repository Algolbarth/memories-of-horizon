import type { System } from '../../../../System/Class';
import { Boss } from '../../../Class/Boss';

export class Godrick extends Boss {
    name = "Godrick, roi des rois";

    constructor(system: System) {
        super(system);

        this.level = 14;
        this.elements.base = ["Neutre"];
        this.familles.base.push("Humain");

        this.stat("Force").init(400);
        this.stat("Constitution").init(4000);
    };
}