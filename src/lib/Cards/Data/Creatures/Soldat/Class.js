import { Creature } from '../../../Class/Creature';

export class Soldat extends Creature {
    name = "Soldat";

    constructor(system) {
        super(system);

        this.init([["Or", 10]]);
        this.familles.base.push("Humain");

        this.stat("Vie").base = 10;
        this.stat("Vie").current = 10;
        this.stat("Attaque").base = 10;
    };
}