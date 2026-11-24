import type { System } from '$lib/system/class';
import { Creature } from '$lib/cards/class/creature';

export class FrondeurGobelin extends Creature {
    name = "Frondeur gobelin";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5], ["Feu", 5]]);

        this.initFamily(["Gobelin"]);

        this.stat("Constitution").init(3);
        this.stat("Force").init(10);
        this.stat("Portée").init(3);
    };
};