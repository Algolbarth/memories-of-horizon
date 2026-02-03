import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class SavoirInterdit extends Action {
    name = "Savoir interdit";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner.zone("Terrain").size > 1) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        this.owner.zone("Terrain").size -= 1;
        this.owner.zone("Inventaire").size += 1;

        this.move("Défausse");
        this.pose();
    };
};
