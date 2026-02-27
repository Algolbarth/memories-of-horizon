import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Action } from '../../../class/action';
import Text from './text.svelte';

export class Aventure extends Action {
    name = "Aventure";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.text = Text;
    };

    useEffect = () => {
        let types = ["Action", "Bâtiment", "Créature", "Lieu", "Objet"];
        for (let i = 0; i < types.length; i++) {
            let readCondition = (card: Card) => {
                if (card.type == types[i]) {
                    return true;
                }
                return false;
            };
            this.owner().draw(1, readCondition);
        }

        this.move("Défausse");
        this.pose();
    };
};