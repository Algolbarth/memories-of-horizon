import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Alchimiste extends Creature {
    name = "Alchimiste";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);
        this.familles.base.push("Humain");

        this.stat("Constitution").init(5);
        this.stat("Force").base = 5;

        this.text = Text;
    };

    useEffect = () => {
        let condition = (card: Card) => {
            if (card.familles.total().includes("Potion")) {
                return true;
            }
            return false;
        };
        this.owner.draw(3, condition);
        this.move("Terrain");
        this.pose();
    };
}