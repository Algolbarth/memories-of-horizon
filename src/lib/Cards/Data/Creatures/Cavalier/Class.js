import { Creature } from '../Creature';

export class Cavalier extends Creature {
    name = "Cavalier";

    constructor(system) {
        super(system);

        this.init([["Or", 20]]);
        this.familles.base.push("Humain");

        this.stat("Vie").base = 10;
        this.stat("Vie").current = 10;
        this.stat("Attaque").base = 10;
        this.stat("Vitesse").base = 1;
    };
}