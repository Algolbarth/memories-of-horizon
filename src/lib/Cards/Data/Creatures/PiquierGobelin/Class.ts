import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class PiquierGobelin extends Creature {
    name = "Piquier gobelin";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Feu", 8]]);
        this.familles.base.push("Gobelin");

        this.stat("Santé").base = 10;
        this.stat("Santé").current = 10;
        this.stat("Force").base = 15;
        this.stat("Percée").base = 10;
    };
}