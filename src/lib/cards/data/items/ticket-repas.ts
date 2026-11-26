import type { System } from '$lib/system/class';
import type { Card } from '$lib/cards/class/card';
import { Item } from '$lib/cards/class/item';

export class TicketRepas extends Item {
    name = "Ticket repas";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.addText([
            `Quand posé : Pioche 1 carte de famille Nourriture de niveau 5 ou moins.`,
            `Réduit totalement le coût de cette carte.`]);
    };

    useEffect = () => {
        let readCondition = (card: Card) => {
            if (card.isFamily("Nourriture") && card.level <= 5) {
                return true;
            }
            return false;
        };
        let cards: Card[] = this.owner().draw(1, readCondition);
        if (cards[0] != undefined) {
            cards[0].reduceFullCost();
        }

        this.move("Défausse");
        this.pose();
    };
};