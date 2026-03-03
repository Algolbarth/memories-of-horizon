import type { System } from '$lib/system/class';
import { Action } from '$lib/cards/class/action';
import Text from './text.svelte';

export class RouteCommerciale extends Action {
    name = "Route commerciale";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.text = Text;
    };

    useEffect = () => {
        this.owner().zone("Pile").size += 1;

        this.move("Défausse");
        this.pose();
    };
}