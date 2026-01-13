import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

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
            let read_condition = (card: Card) => {
                if (card.type == types[i]) {
                    return true;
                }
                return false;
            };
            this.owner.draw(1, read_condition);
        }

        this.move("Défausse");
        this.pose();
    };
};