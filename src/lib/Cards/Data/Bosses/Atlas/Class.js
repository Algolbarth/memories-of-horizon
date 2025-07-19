import { Boss } from '../Boss';

export class Atlas extends Boss {
    name = "Atlas, marche-cratère";

    constructor(system) {
        super(system);

        this.level = 16;
        this.elements.base = ["Neutre"];
        this.familles.base.push("Géant");

        this.stat("Attaque").base = 100;
        this.stat("Vie").base = 1000;
        this.stat("Vie").current = 1000;
    };
}