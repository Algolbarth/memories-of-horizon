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
        let readCondition = (card: Card) => {
            if (card.isFamily("Équipement")) {
                return true;
            }
            return false;
        };
        this.owner().discover(1, readCondition);
        this.move("Défausse");
        this.pose();
    };
}