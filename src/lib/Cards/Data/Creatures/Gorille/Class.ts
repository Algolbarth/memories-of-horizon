import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Gorille extends Creature {
    name = "Gorille";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Végétal", 25]]);

        this.initFamily(["Bête"]);

        this.stat("Constitution").init(35);
        this.stat("Force").init(10);

        this.text = Text;
    };

    useEffect = () => {
        this.owner.getCard("Écrasement").add("Inventaire");
        this.move("Terrain");
        this.pose();
    };
};