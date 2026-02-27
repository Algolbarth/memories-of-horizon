import type { System } from '../../../../system/class';
import { Action } from '../../../class/action';
import Text from './text.svelte';

export class Crochetage extends Action {
    name = "Crochetage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.text = Text;
    };

    useEffect = () => {
        this.owner().zone("Pile").turn_level -= 1;

        this.move("Défausse");
        this.pose();
    };
};