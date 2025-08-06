import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Elfe extends Creature {
    name = "Elfe";

    constructor(system: System) {
        super(system);

        this.init([["Or", 4], ["Végétal", 4]]);
        this.familles.base.push("Elfe");

        this.stat("Vie").base = 10;
        this.stat("Vie").current = 10;
        this.stat("Attaque").base = 5;
    };
}