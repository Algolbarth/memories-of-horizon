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
        let read_condition = (card: Card) => {
            if (card.familles.total().includes("Nourriture")) {
                return true;
            }
            return false;
        };

        if (this.owner.totalIntelligence() >= 20) {
            this.owner.discover(5, read_condition);
        }
        else {
            this.owner.discover(3, read_condition);
        }

        this.move("Défausse");
        this.pose();
    };
}