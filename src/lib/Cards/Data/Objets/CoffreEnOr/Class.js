import { Objet } from '../../../Class/Objet';
import Text from './Text.svelte';

export class CoffreEnOr extends Objet {
    name = "Coffre en or";

    constructor(system) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    useEffect = function () {
        let condition = function (card, drawer) {
            if (drawer.owner.zone("Boutique").level == card.level) {
                return true;
            }
            return false;
        };
        let cards = this.owner.draw(1, condition, this);
        cards[0].coutReduce(20);
        this.move("Défausse");
        this.pose();
    };
}