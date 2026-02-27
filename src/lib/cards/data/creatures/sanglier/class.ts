import { copy } from '../../../../utils';
import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class Sanglier extends Creature {
    name = "Sanglier";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Végétal", 20]]);

        this.initFamily(["Bête"]);

        this.stat("Constitution").init(25);
        this.stat("Force").init(10);

        this.text = Text;
    };

    useEffect = () => {
        let battlefield = copy(this.owner().zone("Terrain").cards);
        for (const card of battlefield) {
            if (card instanceof Creature && card.isFamily("Bête")) {
                this.stat("Force").increase(5);
            }
        }

        this.move("Terrain");
        this.pose();
    };
};