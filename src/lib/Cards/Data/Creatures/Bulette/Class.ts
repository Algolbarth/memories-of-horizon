import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Bulette extends Creature {
    name = "Bulette";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Terre", 25]]);

        this.families.base.push("Bête");

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);
        this.stat("Endurance").init(15);

        this.text = Text;
    };

    useEffect = () => {
        this.owner.getCard("Coup de bouclier").add("Réserve");
        this.move("Terrain");
        this.pose();
    };
};