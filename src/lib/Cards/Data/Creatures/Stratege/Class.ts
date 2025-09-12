import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Stratège extends Creature {
    name = "Stratège";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);
        this.familles.base.push("Humain");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);
        this.stat("Intelligence").init(2);

        this.text = Text;
    };

    useEffect = () => {
        let condition = (card: Card) => {
            if (card.type == "Action") {
                return true;
            }
            return false;
        };
        this.owner.draw(2, condition);
        this.move("Terrain");
        this.pose();
    };
}