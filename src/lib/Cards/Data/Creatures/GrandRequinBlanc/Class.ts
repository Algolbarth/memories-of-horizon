import type { System } from '../../../../System/Class';
import { copy } from '../../../../Utils';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class GrandRequinBlanc extends Creature {
    name = "Grand requin blanc";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50], ["Eau", 50]]);

        this.initFamily(["Poisson"]);

        this.stat("Constitution").init(50);
        this.stat("Force").init(50);

        this.text = Text;
    };

    useEffect = () => {
        let readCondition = (card: Card) => {
            if (card instanceof Creature && card.isFamily("Poisson")) {
                return true;
            }
            return false;
        };
        this.owner().draw(3, readCondition);

        let battlefield = copy(this.owner().zone("Terrain").cards);
        for (const card of battlefield) {
            if (card instanceof Creature && card.isFamily("Poisson")) {
                this.stat("Constitution").increase(5);
                this.stat("Force").increase(5);
            }
        }

        this.move("Terrain");
        this.pose();
    };
};