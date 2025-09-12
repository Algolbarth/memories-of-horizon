import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Garde extends Creature {
    name = "Garde";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);
        this.familles.base.push("Humain");

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);
        this.stat("Protection").init(1);
    };
}