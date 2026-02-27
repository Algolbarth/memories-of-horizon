import { copy } from '../../../../utils';
import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class Titan extends Creature {
    name = "Titan";

    constructor(system: System) {
        super(system);

        this.init([["Or", 250]]);

        this.initFamily(["Géant"]);

        this.stat("Constitution").init(50);
        this.stat("Force").init(50);

        this.text = Text;
    };

    useEffect = () => {
        let battlefield = copy(this.owner().zone("Terrain").cards);
        for (const card of battlefield) {
            if (card instanceof Creature && card.level >= 5) {
                card.stat("Constitution").increase(25);
                card.stat("Force").increase(25);
            }
        }

        this.move("Terrain");
        this.pose();
    };
};