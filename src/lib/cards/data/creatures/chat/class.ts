import type { System } from '$lib/system/class';
import { Creature } from '$lib/cards/class/creature';
import Text from './text.svelte';

export class Chat extends Creature {
    name = "Chat";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.initFamily(["Bête"]);

        this.stat("Constitution").init(3);
        this.stat("Force").init(3);

        this.text = Text;
    };

    fightEffect = () => {
        this.owner().ressource("Or").stock(1);
    };
};