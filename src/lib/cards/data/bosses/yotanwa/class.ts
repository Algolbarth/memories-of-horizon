import type { System } from '../../../../system/class';
import { Boss } from '../../../class/boss';

export class Yotanwa extends Boss {
    name = "Yotanwa, patronne de la guerre";

    constructor(system: System) {
        super(system);

        this.level = 12;
        this.elements.base = ["Neutre"];
        this.initFamily(["Humain"]);

        this.stat("Force").init(200);
        this.stat("Constitution").init(2000);
    };
}