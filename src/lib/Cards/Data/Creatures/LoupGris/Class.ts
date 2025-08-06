import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class LoupGris extends Creature {
    name = "Loup gris";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8]]);
        this.familles.base.push("Bête");

        this.stat("Vie").base = 5;
        this.stat("Vie").current = 5;
        this.stat("Attaque").base = 10;
    };
}