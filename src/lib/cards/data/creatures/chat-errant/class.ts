import type { System } from '$lib/system/class';
import { Creature } from '$lib/cards/class/creature';
import Text from './text.svelte';

export class ChatErrant extends Creature {
    name = "Chat errant";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.initFamily(["Bête"]);

        this.stat("Constitution").init(3);
        this.stat("Force").init(3);

        this.text = Text;
    };

    startBattleEffect = () => {
        this.owner().getCard("Chat").add("Terrain");
    };

    fightEffect = () => {
        this.owner().ressource("Or").stock(1);
    };
};