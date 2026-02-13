import type { System } from '../../../../System/Class';
import { copy } from '../../../../Utils';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Brochet extends Creature {
    name = "Brochet";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Eau", 10]]);

        this.initFamily(["Poisson"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);

        this.text = Text;
    };

    useEffect = () => {
        let readCondition = (card: Card) => {
            if (card instanceof Creature && card.isFamily("Poisson")) {
                return true;
            }
            return false;
        };
        this.owner.draw(1, readCondition);

        let battlefield = copy(this.owner.zone("Terrain").cards);
        for (const card of battlefield) {
            if (card instanceof Creature && card.isFamily("Poisson")) {
                this.stat("Constitution").increase(1);
                this.stat("Force").increase(1);
            }
        }

        this.move("Terrain");
        this.pose();
    };
};