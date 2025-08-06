import type { System } from '../../../../System/Class';
import { Boss } from '../../../Class/Boss';

export class Avatar extends Boss {
    name = "L'Avatar, chapitre final";

    constructor(system: System) {
        super(system);

        this.level = 20;
        this.elements.base = ["Neutre"];
        this.familles.base.push("Avatar");

        this.stat("Attaque").base = 100;
        this.stat("Vie").base = 1000;
        this.stat("Vie").current = 1000;
    };
}