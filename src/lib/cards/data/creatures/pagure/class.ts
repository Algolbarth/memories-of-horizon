import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';
import Use from './use.svelte';

export class Pagure extends Creature {
    name = "Pagure";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Eau", 15]]);

        this.stat("Constitution").init(2);
        this.stat("Force").init(2);
        this.stat("Endurance").init(3);

        this.text = Text;
    };

    select = () => {
        if (this.owner().is_player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect("Conque");
        }
    };

    useEffect = (choice: string) => {
        this.owner().getCard(choice).add("Inventaire");

        this.move("Terrain");
        this.pose();
    };
};