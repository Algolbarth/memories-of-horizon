import { copy } from '../../../../utils';
import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class Archonte extends Creature {
    name = "Archonte";

    constructor(system: System) {
        super(system);

        this.init([["Or", 55], ["Terre", 55]]);

        this.initFamily(["Nain"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(5);
        this.stat("Endurance").init(3);

        this.text = Text;
    };

    useEffect = () => {
        let battlefield = copy(this.owner().zone("Terrain").cards);
        for (const card of battlefield) {
            card.stat("Endurance").increase(10);
        }

        this.move("Terrain");
        this.pose();
    };
};