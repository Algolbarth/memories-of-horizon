import { Boss } from '../Boss';

export class DucYousei extends Boss {
    name = "Duc Yousei";

    constructor(system) {
        super(system);

        this.level = 8;
        this.elements.base = ["Feu"];
        this.familles.base.push("Gobelin");

        this.stat("Attaque").base = 10;
        this.stat("Vie").base = 50;
        this.stat("Vie").current = 50;
    };
}