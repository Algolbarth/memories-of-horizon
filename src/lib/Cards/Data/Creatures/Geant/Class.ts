import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Geant extends Creature {
    name = "Géant";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);
        this.familles.base.push("Géant");

        this.stat("Constitution").init(50);
        this.stat("Force").init(50);
    };
}