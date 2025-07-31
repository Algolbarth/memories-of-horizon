import { Creature } from '../../../Class/Creature';

export class Archimage extends Creature {
    name = "Archimage";

    constructor(system) {
        super(system);

        this.init([["Or", 100]]);
        this.familles.base.push("Humain");

        this.stat("Vie").base = 50;
        this.stat("Vie").current = 50;
        this.stat("Attaque").base = 50;
        this.stat("Magie").base = 25;
    };
}