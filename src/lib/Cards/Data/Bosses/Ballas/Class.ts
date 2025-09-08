import type { System } from '../../../../System/Class';
import { Boss } from '../../../Class/Boss';

export class Ballas extends Boss {
    name = "Ballas, suprémaciste";

    constructor(system: System) {
        super(system);

        this.level = 18;
        this.elements.base = ["Eau"];
        this.familles.base.push("Ondin");

        this.stat("Force").base = 10;
        this.stat("Santé").base = 50;
        this.stat("Santé").current = 50;
    };
}