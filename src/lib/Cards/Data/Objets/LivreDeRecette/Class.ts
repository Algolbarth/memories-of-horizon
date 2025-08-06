import type { System } from '../../../../System/Class';
import { Objet } from '../../../Class/Objet';
import Text from './Text.svelte';

export class LivreDeRecette extends Objet {
    name = "Livre de recette";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.text = Text;
    };

    useEffect = function () {
        let condition = function (card: Card) {
            if (card.familles.total().includes("Nourriture")) {
                return true;
            }
            return false;
        };

        if (this.owner.totalIntelligence() >= 20) {
            this.owner.discover(5, condition);
        }
        else {
            this.owner.discover(3, condition);
        }

        this.move("Défausse");
        this.pose();
    };
}