import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Worg extends Creature {
    name = "Worg";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Feu", 25]]);
        this.familles.base.push("Bête");

        this.stat("Constitution").init(10);
        this.stat("Force").init(40);

        this.text = Text;
    };

    useEffect = () => {
        this.owner.getCard("Frappe").add("Réserve");
        this.move("Terrain");
        this.pose();
    };
}