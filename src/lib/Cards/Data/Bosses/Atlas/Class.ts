import type { System } from '../../../../System/Class';
import { Boss } from '../../../Class/Boss';

export class Atlas extends Boss {
    name = "Atlas, marche-cratère";

    constructor(system: System) {
        super(system);

        this.level = 16;
        this.elements.base = ["Neutre"];
        this.familles.base.push("Géant");

        this.stat("Force").base = 100;
        this.stat("Santé").base = 1000;
        this.stat("Santé").current = 1000;
    };
}