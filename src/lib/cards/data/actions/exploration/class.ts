import type { System } from '../../../../system/class';
import { Action } from '../../../class/action';
import Text from './text.svelte';

export class Exploration extends Action {
    name = "Exploration";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.text = Text;
    };

    useEffect = () => {
        this.owner().zone("Terrain").size += 1;

        this.move("Défausse");
        this.pose();
    };
}