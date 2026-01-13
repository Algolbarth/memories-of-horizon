import type { System } from '../../../../System/Class';
import { Boss } from '../../../Class/Boss';

export class Yotanwa extends Boss {
    name = "Yotanwa, patronne de la guerre";

    constructor(system: System) {
        super(system);

        this.level = 12;
        this.elements.base = ["Neutre"];
        this.families.base.push("Humain");

        this.stat("Force").init(200);
        this.stat("Constitution").init(2000);
    };
}