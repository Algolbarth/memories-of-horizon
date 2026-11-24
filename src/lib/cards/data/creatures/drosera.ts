import type { System } from '$lib/system/class';
import { Creature } from '$lib/cards/class/creature';

export class Drosera extends Creature {
    name = "Droséra";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Nature", 10]]);

        this.initFamily(["Plante"]);

        this.stat("Constitution").init(25);
        this.stat("Psychisme").init(5);
        this.stat("Initiative").init(0);
        this.stat("Maîtrise").init(0);
    };
};