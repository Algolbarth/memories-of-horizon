import type { System } from '../../../../System/Class';
import { Boss } from '../../../Class/Boss';

export class Yotanwa extends Boss {
    name = "Yotanwa, patronne de la guerre";

    constructor(system: System) {
        super(system);

        this.level = 12;
        this.elements.base = ["Neutre"];
        this.familles.base.push("Humain");

        this.stat("Force").init(10);
        this.stat("Constitution").init(50);
    };
}