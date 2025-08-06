import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class Forger extends Action {
    name = "Forger";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8]]);

        this.text = Text;
    };

    useEffect = function () {
        let condition = function (card: Card) {
            if (card.familles.total().includes("Équipement")) {
                return true;
            }
            return false;
        };
        this.owner.discover(1, condition);
        this.move("Défausse");
        this.pose();
    };
}