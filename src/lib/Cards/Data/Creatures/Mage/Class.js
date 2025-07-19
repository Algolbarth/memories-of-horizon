import { Creature } from '../Creature';

export class Mage extends Creature {
    name = "Mage";

    constructor(system) {
        super(system);

        this.init([["Or", 15]]);
        this.familles.base.push("Humain");

        this.stat("Vie").base = 5;
        this.stat("Vie").current = 5;
        this.stat("Attaque").base = 5;
        this.stat("Magie").base = 5;
    };
}