import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Objet } from '../../../Class/Objet';
import Text from './Text.svelte';

export class CoffreEnOr extends Objet {
    name = "Coffre en or";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    useEffect = function () {
        let condition = function (card: Card, drawer: Card) {
            if (drawer.owner?.zone("Boutique").level == card.level) {
                return true;
            }
            return false;
        };
        let cards = this.owner.draw(1, condition, this);
        cards[0].costReduce(20);
        this.move("Défausse");
        this.pose();
    };
}