import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Guerrier extends Creature {
    name = "Guerrier";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);
        this.familles.base.push("Humain");

        this.stat("Vie").base = 10;
        this.stat("Vie").current = 10;
        this.stat("Attaque").base = 10;
        this.stat("Défense").base = 5;
    };
}