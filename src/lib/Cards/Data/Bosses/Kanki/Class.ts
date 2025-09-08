import type { System } from '../../../../System/Class';
import { Boss } from '../../../Class/Boss';

export class Kanki extends Boss {
    name = "Kanki, roi des bandits";

    constructor(system: System) {
        super(system);

        this.level = 4;
        this.elements.base = ["Neutre"];
        this.familles.base.push("Humain");

        this.stat("Force").base = 25;
        this.stat("Santé").base = 100;
        this.stat("Santé").current = 100;
    };
}