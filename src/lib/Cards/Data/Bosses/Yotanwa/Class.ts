import type { System } from '../../../../System/Class';
import { Boss } from '../../../Class/Boss';

export class Yotanwa extends Boss {
    name = "Yotanwa, patronne de la guerre";

    constructor(system: System) {
        super(system);

        this.level = 12;
        this.elements.base = ["Neutre"];
        this.familles.base.push("Humain");

        this.stat("Force").base = 10;
        this.stat("Santé").base = 50;
        this.stat("Santé").current = 50;
    };
}