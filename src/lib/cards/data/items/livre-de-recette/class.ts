import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Item } from '../../../class/item';
import Text from './text.svelte';

export class LivreDeRecette extends Item {
    name = "Livre de recette";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    useEffect = () => {
        let readCondition = (card: Card) => {
            if (card.isFamily("Nourriture")) {
                return true;
            }
            return false;
        };

        if (this.owner().totalIntelligence() >= 20) {
            this.owner().discover(5, readCondition);
        }
        else {
            this.owner().discover(3, readCondition);
        }

        this.move("Défausse");
        this.pose();
    };
};