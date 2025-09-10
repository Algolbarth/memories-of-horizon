import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class Restockage extends Action {
    name = "Restockage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.text = Text;
    };

    useEffect = function () {
        this.owner.refreshStack();
        this.move("Défausse");
        this.pose();
    };
}