import { copy } from '../../../../utils';
import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class Doyen extends Creature {
    name = "Doyen";

    constructor(system: System) {
        super(system);

        this.init([["Or", 55], ["Végétal", 55]]);

        this.initFamily(["Elfe"]);

        this.stat("Constitution").init(15);
        this.stat("Force").init(5);

        this.text = Text;
    };

    useEffect = () => {
        let battlefield = copy(this.owner().zone("Terrain").cards);
        for (const card of battlefield) {
            if (card instanceof Creature) {
                card.stat("Constitution").increase(15);
            }
        }

        this.move("Terrain");
        this.pose();
    };
};