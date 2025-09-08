import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class Mage extends Creature {
    name = "Mage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);
        this.familles.base.push("Humain");

        this.stat("Santé").base = 5;
        this.stat("Santé").current = 5;
        this.stat("Force").base = 5;
        this.stat("Magie").base = 5;
    };
}