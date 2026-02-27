import type { System } from '../../../../system/class';
import { Action } from '../../../class/action';
import Text from './text.svelte';

export class Conquete extends Action {
    name = "Conquête";

    constructor(system: System) {
        super(system);

        this.init([["Or", 75]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner().zone("Terrain").isFull()) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        this.owner().zone("Terrain").size += 2;

        this.move("Défausse");
        this.pose();
    };
};