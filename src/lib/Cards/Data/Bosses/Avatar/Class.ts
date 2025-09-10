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
        this.stat("Constitution").init(1000);
    };
}