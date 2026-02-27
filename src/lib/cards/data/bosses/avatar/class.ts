import type { System } from '../../../../system/class';
import { Boss } from '../../../class/boss';

export class Avatar extends Boss {
    name = "L'Avatar, chapitre final";

    constructor(system: System) {
        super(system);

        this.level = 20;
        this.elements.base = ["Neutre"];
        this.initFamily(["Avatar"]);

        this.stat("Force").init(1000);
        this.stat("Constitution").init(30000);
    };
}