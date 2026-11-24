import type { System } from '$lib/system/class';
import type { Card } from '$lib/cards/class/card';
import { Creature } from '$lib/cards/class/creature';

export class PoissonClown extends Creature {
    name = "Poisson-clown";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Eau", 8]]);

        this.initFamily(["Poisson"]);

        this.stat("Constitution").init(1);
        this.stat("Force").init(1);
        this.stat("Charisme").init(1);

        this.addText(`Quand arrive sur le terrain ou quand meurt : Pioche 1 créature de famille Poisson et la verrouille.`);
    };

    addEffect = (zone: string) => {
        if (zone == "Terrain") {
            let readCondition = (card: Card) => {
                if (card instanceof Creature && card.isFamily("Poisson")) {
                    return true;
                }
                return false;
            };
            let cards: Card[] = this.owner().draw(1, readCondition);
            for (const c of cards) {
                c.lock();
            }
        }
    };

    dieEffect = () => {
        let readCondition = (card: Card) => {
            if (card instanceof Creature && card.isFamily("Poisson")) {
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