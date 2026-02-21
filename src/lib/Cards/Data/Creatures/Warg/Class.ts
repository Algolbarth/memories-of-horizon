import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Warg extends Creature {
    name = "Warg";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Feu", 25]]);

        this.initFamily(["Bête"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(40);

        this.text = Text;
    };

    useEffect = () => {
        this.owner().getCard("Frappe").add("Inventaire");

        this.move("Terrain");
        this.pose();
    };
};