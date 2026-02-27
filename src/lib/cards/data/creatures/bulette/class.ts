import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class Bulette extends Creature {
    name = "Bulette";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Terre", 25]]);

        this.initFamily(["Bête"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);
        this.stat("Endurance").init(15);

        this.text = Text;
    };

    useEffect = () => {
        this.owner().getCard("Coup de bouclier").add("Inventaire");

        this.move("Terrain");
        this.pose();
    };
};