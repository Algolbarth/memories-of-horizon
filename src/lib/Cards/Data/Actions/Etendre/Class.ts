import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class Etendre extends Action {
    name = "Étendre";

    constructor(system: System) {
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