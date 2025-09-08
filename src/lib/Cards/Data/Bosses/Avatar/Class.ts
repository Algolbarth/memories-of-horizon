import type { System } from '../../../../System/Class';
import { Boss } from '../../../Class/Boss';

export class Avatar extends Boss {
    name = "L'Avatar, chapitre final";

    constructor(system: System) {
        super(system);

        this.level = 20;
        this.elements.base = ["Neutre"];
        this.familles.base.push("Avatar");

        this.stat("Force").base = 100;
        this.stat("Santé").base = 1000;
        this.stat("Santé").current = 1000;
    };
}