import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class Restockage extends Action {
    name = "Restockage";

    constructor(system) {
        super(system);

        this.init([["Or", 10]]);

        this.text = Text;
    };

    useEffect = function () {
        this.owner.refreshShop();
        this.move("Défausse");
        this.pose();
    };
}