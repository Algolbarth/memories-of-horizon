import type { System } from '$lib/system/class';
import { Creature } from '$lib/cards/class/creature';
import type { Unit } from '$lib/cards/class/unit';
import type { Card } from '$lib/cards/class/card';

export class PilleurDeGardeManger extends Creature {
    name = "Pilleur de garde-manger";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Feu", 10]]);

        this.initFamily(["Gobelin"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(10);

        this.addText(`Quand attaque : Pioche 1 carte de famille Nourriture et la verrouille.`);
    };

    attackEffect = (defender: Unit) => {
        let readCondition = (card: Card) => {
            if (card.isFamily("Nourriture")) {
                return true;
            }
            return false;
        };
        let cards: Card[] = this.owner().draw(1, readCondition);
        for (const c of cards) {
            c.lock();
        }
    };
};