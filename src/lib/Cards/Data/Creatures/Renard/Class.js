import { Creature } from '../Creature';

export class Renard extends Creature {
    name = "Renard";

    constructor(system) {
        super(system);

        this.init([["Or", 8], ["Végétal", 8]]);
        this.familles.base.push("Bête");

        this.stat("Vie").base = 5;
        this.stat("Vie").current = 5;
        this.stat("Attaque").base = 5;
        this.stat("Intelligence").base = 2;
    };
}