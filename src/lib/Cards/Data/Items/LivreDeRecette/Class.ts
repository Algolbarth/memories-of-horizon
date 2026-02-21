import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';

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