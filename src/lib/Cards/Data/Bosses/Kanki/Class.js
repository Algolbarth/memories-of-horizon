import { Boss } from '../Boss';

export class Kanki extends Boss {
    name = "Kanki, roi des bandits";

    constructor(system) {
        super(system);

        this.level = 4;
        this.elements.base = ["Neutre"];
        this.familles.base.push("Humain");

        this.stat("Attaque").base = 25;
        this.stat("Vie").base = 100;
        this.stat("Vie").current = 100;
    };
}