import { Action } from '../Action';
import Text from './Text.svelte';

export class Exploration extends Action {
    name = "Exploration";

    constructor(system) {
        super(system);

        this.init([["Or", 50]]);

        this.text = Text;
    };

    useEffect = function () {
        this.owner.zone("Boutique").size++;

        this.move("Défausse");
        this.pose();
    };
}