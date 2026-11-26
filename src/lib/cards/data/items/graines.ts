import type { System } from '$lib/system/class';
import type { Card } from '$lib/cards/class/card';
import { Item } from '$lib/cards/class/item';

export class Graines extends Item {
    name = "Graines";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Nature", 8]]);

        this.initFamily(["Plante"]);

        this.addText([
            `Quand posé : Pioche 1 carte de famille Plante.`,
            `Réduit de 25 le coût de cette carte.`]);
    };

    useEffect = () => {
        let readCondition = (card: Card) => {
            if (card.isFamily("Plante")) {
                return true;
            }
            return false;
        };
        let cards: Card[] = this.owner().draw(1, readCondition);
        if (cards[0] != undefined) {
            cards[0].reduceCost(25);
        }

        this.move("Défausse");
        this.pose();
    };
};