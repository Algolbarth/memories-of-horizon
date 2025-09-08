import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class GuerrierGeant extends Creature {
    name = "Guerrier géant";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);
        this.familles.base.push("Géant");

        this.stat("Santé").base = 75;
        this.stat("Santé").current = 75;
        this.stat("Force").base = 75;
        this.stat("Endurance").base = 25;
    };
}