import type { System } from '../../../../System/Class';
import { Boss } from '../../../Class/Boss';

export class Avatar extends Boss {
    name = "L'Avatar, chapitre final";

    constructor(system: System) {
        super(system);

        this.level = 20;
        this.elements.base = ["Neutre"];
        this.families.base.push("Avatar");

        this.stat("Force").init(1000);
        this.stat("Constitution").init(30000);
    };
}