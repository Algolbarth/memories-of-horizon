import { Boss } from '../Boss.js';

export class Gyoun extends Boss {
    name = "Gyoun, colosse de jade";

    constructor(system) {
        super(system);

        this.level = 10;
        this.elements.base = ["Végétal"];
        this.familles.base.push("Elfe");

        this.stat("Attaque").base = 50;
        this.stat("Vie").base = 250;
        this.stat("Vie").current = 250;
    };
}