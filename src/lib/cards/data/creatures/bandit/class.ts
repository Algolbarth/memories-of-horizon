import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class Bandit extends Creature {
    name = "Bandit";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    useEffect = () => {
        if (this.owner().ressource("Or").total() >= 5) {
            this.owner().ressource("Or").spend(5);
            this.stat("Constitution").increase(5);
            this.stat("Force").increase(5);
        }

        this.move("Terrain");
        this.pose();
    };
};