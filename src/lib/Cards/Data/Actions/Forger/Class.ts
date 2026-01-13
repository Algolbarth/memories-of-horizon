import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class Forger extends Action {
    name = "Forger";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8]]);

        this.text = Text;
    };

    useEffect = () => {
        let read_condition = (card: Card) => {
            if (card.families.total().includes("Équipement")) {
                return true;
            }
            return false;
        };
        this.owner.discover(1, read_condition);
        this.move("Défausse");
        this.pose();
    };
}