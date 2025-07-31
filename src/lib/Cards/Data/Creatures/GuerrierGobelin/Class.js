import { Creature } from '../../../Class/Creature';

export class GuerrierGobelin extends Creature {
    name = "Guerrier gobelin";

    constructor(system) {
        super(system);

        this.init([["Or", 10], ["Feu", 10]]);
        this.familles.base.push("Gobelin");

        this.stat("Vie").base = 10;
        this.stat("Vie").current = 10;
        this.stat("Attaque").base = 20;
        this.stat("Défense").base = 5;
    };
}