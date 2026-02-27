import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class Sardine extends Creature {
    name = "Sardine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 2], ["Eau", 2]]);

        this.initFamily(["Poisson"]);

        this.stat("Constitution").init(1);
        this.stat("Force").init(1);

        this.text = Text;
    };

    useEffect = () => {
        let readCondition = (card: Card) => {
            if (card instanceof Creature && card.isFamily("Poisson")) {
                return true;
            }
            return false;
        };
        this.owner().draw(1, readCondition);

        this.move("Terrain");
        this.pose();
    };
};