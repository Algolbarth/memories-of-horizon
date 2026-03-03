import type { System } from '$lib/system/class';
import type { Card } from '$lib/cards/class/class';
import { Action } from '$lib/cards/class/action';
import { Creature } from '$lib/cards/class/creature';
import Text from './text.svelte';

export class Stratège extends Creature {
    name = "Stratège";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);
        this.stat("Intelligence").init(2);

        this.text = Text;
    };

    useEffect = () => {
        let readCondition = (card: Card) => {
            if (card instanceof Action) {
                return true;
            }
            return false;
        };
        this.owner().draw(1, readCondition);

        this.move("Terrain");
        this.pose();
    };
};