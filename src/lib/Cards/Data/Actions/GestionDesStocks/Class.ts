import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class GestionDesStocks extends Action {
    name = "Gestion des stocks";

    constructor(system: System) {
        super(system);

        this.init([["Or", 75]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner?.zone("Inventaire").isFull()) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        this.owner.zone("Inventaire").size += 2;

        this.move("Défausse");
        this.pose();
    };
}