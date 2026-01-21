import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class BarriereDeCorail extends Creature {
    name = "Barrière de corail";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Eau", 25]]);

        this.stat("Constitution").init(40);
        this.stat("Régénération").init(20);
        this.stat("Initiative").init(0);
        this.stat("Maîtrise").init(0);
    };
};