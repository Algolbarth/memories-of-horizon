import type { System } from '../../../../system/class';
import { Action } from '../../../class/action';
import Text from './text.svelte';

export class Restockage extends Action {
    name = "Restockage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.text = Text;
    };

    useEffect = () => {
        this.owner().refreshStack();

        this.move("Défausse");
        this.pose();
    };
};