import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Alchimiste extends Creature {
    name = "Alchimiste";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    useEffect = () => {
        let readCondition = (card: Card) => {
            if (card.isFamily("Potion")) {
                return true;
            }
            return false;
        };
        this.owner.draw(1, readCondition);

        this.move("Terrain");
        this.pose();
    };
};