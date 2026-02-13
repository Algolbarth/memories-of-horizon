import type { System } from '../../../../System/Class';
import { copy } from '../../../../Utils';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Thon extends Creature {
    name = "Thon";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Eau", 15]]);

        this.initFamily(["Poisson"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

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
                this.owner?.ressource("Eau").produce(3);
            }
        }

        this.move("Terrain");
        this.pose();
    };
};