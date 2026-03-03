import type { System } from '$lib/system/class';
import { Action } from '$lib/cards/class/action';
import Text from './text.svelte';

export class Innovation extends Action {
    name = "Innovation";

    constructor(system: System) {
        super(system);

        this.init([["Or", 75]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner().zone("Pile").isFull()) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        this.owner().zone("Pile").size += 2;

        this.move("Défausse");
        this.pose();
    };
}