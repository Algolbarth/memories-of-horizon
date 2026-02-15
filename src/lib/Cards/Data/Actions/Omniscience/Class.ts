import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class Omniscience extends Action {
    name = "Omniscience";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner?.zone("Pile").isNotFull()) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        this.owner?.discover(this.owner.zone("Pile").size - this.owner.zone("Pile").cards.length);

        this.move("Défausse");
        this.pose();
    };
};