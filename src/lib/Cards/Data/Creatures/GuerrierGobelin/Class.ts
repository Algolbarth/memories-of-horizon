import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class GuerrierGobelin extends Creature {
    name = "Guerrier gobelin";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Feu", 10]]);
        this.familles.base.push("Gobelin");

        this.stat("Constitution").init(10);
        this.stat("Force").base = 20;
        this.stat("Endurance").base = 5;
    };
}