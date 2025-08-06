import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class Exploration extends Action {
    name = "Exploration";

    constructor(system: System) {
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