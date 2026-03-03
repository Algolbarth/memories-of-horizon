import type { System } from '$lib/system/class';
import { Creature } from '$lib/cards/class/creature';
import Text from './text.svelte';

export class Danseuse extends Creature {
    name = "Danseuse";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    startBattleEffect = () => {
        this.stat("Esquive").turn += 1;
    };
};