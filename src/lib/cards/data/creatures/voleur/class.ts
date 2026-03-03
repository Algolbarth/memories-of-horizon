import type { System } from '$lib/system/class';
import { Creature } from '$lib/cards/class/creature';
import Text from './text.svelte';

export class Voleur extends Creature {
    name = "Voleur";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    fightEffect = () => {
        this.getSale("Or").increase(5);
    };
};