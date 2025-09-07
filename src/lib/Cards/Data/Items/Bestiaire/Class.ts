import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Objet } from '../../../Class/Item';
import Text from './Text.svelte';

export class Bestiaire extends Objet {
    name = "Bestiaire";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.text = Text;
    };

    useEffect = function () {
        let condition = function (card: Card) {
            if (card.type == "Créature") {
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