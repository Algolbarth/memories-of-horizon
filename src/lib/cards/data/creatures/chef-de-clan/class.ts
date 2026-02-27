import { copy } from '../../../../utils';
import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class ChefDeClan extends Creature {
    name = "Chef de clan";

    constructor(system: System) {
        super(system);

        this.init([["Or", 55], ["Feu", 55]]);

        this.initFamily(["Gobelin"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);

        this.text = Text;
    };

    useEffect = () => {
        let battlefield = copy(this.owner().zone("Terrain").cards);
        for (const card of battlefield) {
            if (card instanceof Creature) {
                card.stat("Force").increase(20);
            }
        }

        this.move("Terrain");
        this.pose();
    };
};