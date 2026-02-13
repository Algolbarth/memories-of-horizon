import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class Crochetage extends Action {
    name = "Crochetage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.text = Text;
    };

    useEffect = () => {
        this.owner.zone("Pile").turn_level -= 1;

        this.move("Défausse");
        this.pose();
    };
};