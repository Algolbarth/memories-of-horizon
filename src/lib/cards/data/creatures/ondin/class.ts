import type { System } from '$lib/system/class';
import { Creature } from '$lib/cards/class/creature';
import Text from './text.svelte';

export class Ondin extends Creature {
    name = "Ondin";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5], ["Eau", 5]]);

        this.initFamily(["Ondin"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    addEffect = (zone: string) => {
        if (zone == "Terrain") {
            this.owner().ressource("Eau").produce(5);
        }
    };
};