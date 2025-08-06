import type { System } from '../../../../System/Class';
import { Boss } from '../../../Class/Boss';

export class Godrick extends Boss {
    name = "Godrick, roi des rois";

    constructor(system: System) {
        super(system);

        this.level = 14;
        this.elements.base = ["Neutre"];
        this.familles.base.push("Humain");

        this.stat("Attaque").base = 100;
        this.stat("Vie").base = 1000;
        this.stat("Vie").current = 1000;
    };
}