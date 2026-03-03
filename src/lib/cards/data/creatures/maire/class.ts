import type { System } from '$lib/system/class';
import { Creature } from '$lib/cards/class/creature';
import Text from './text.svelte';

export class Maire extends Creature {
    name = "Maire";

    constructor(system: System) {
        super(system);

        this.init([["Or", 105]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    startPhaseEffect = () => {
        this.owner().ressource("Or").produce(5 * this.owner().zone("Terrain").cards.length);
    };
};