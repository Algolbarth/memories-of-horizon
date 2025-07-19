import { Action } from '../Action';
import Text from './Text.svelte';

export class Agrandissement extends Action {
    name = "Agrandissement";

    constructor(system) {
        super(system);

        this.init([["Or", 50]]);

        this.text = Text;
    };

    useEffect = function () {
        this.owner.zone("Main").size++;

        this.move("Défausse");
        this.pose();
    };
}