import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Gobelin extends Creature {
    name = "Gobelin";

    constructor(system: System) {
        super(system);

        this.init([["Or", 3], ["Feu", 2]]);
        this.familles.base.push("Gobelin");

        this.stat("Vie").base = 3;
        this.stat("Vie").current = 3;
        this.stat("Attaque").base = 10;
    };
}