import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Sardine extends Creature {
    name = "Sardine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 2], ["Eau", 2]]);
        this.familles.base.push("Poisson");

        this.stat("Constitution").init(1);
        this.stat("Force").init(1);

        this.text = Text;
    };

    useEffect = () => {
        let condition = (card: Card) => {
            if (card.type == "Créature" && card.familles.total().includes("Poisson")) {
                return true;
            }
            return false;
        };
        this.owner.draw(1, condition);

        this.move("Terrain");
        this.pose();
    };
};