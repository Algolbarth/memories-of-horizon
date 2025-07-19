import { Action } from '../Action';
import Text from './Text.svelte';

export class Etendre extends Action {
    name = "Étendre";

    constructor(system) {
        super(system);

        this.init([["Or", 50]]);

        this.text = Text;
    };

    useEffect = function () {
        this.owner.zone("Terrain").size++;

        this.move("Défausse");
        this.pose();
    };
}