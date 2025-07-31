import { Creature } from '../../../Class/Creature';

export class Geant extends Creature {
    name = "Géant";

    constructor(system) {
        super(system);

        this.init([["Or", 50]]);
        this.familles.base.push("Géant");

        this.stat("Vie").base = 50;
        this.stat("Vie").current = 50;
        this.stat("Attaque").base = 50;
    };
}