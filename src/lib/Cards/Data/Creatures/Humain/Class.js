import { Creature } from '../../../Class/Creature';

export class Humain extends Creature {
    name = "Humain";

    constructor(system) {
        super(system);

        this.init([["Or", 5]]);
        this.familles.base.push("Humain");

        this.stat("Vie").base = 5;
        this.stat("Vie").current = 5;
        this.stat("Attaque").base = 5;
    };
}