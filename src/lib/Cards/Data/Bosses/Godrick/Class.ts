import type { System } from '../../../../System/Class';
import { Boss } from '../../../Class/Boss';

export class Godrick extends Boss {
    name = "Godrick, roi des rois";

    constructor(system: System) {
        super(system);

        this.level = 14;
        this.elements.base = ["Neutre"];
        this.familles.base.push("Humain");

        this.stat("Force").base = 100;
        this.stat("Santé").base = 1000;
        this.stat("Santé").current = 1000;
    };
}