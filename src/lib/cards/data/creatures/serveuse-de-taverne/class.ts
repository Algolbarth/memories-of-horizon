import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class ServeuseDeTaverne extends Creature {
    name = "Serveuse de taverne";

    constructor(system: System) {
        super(system);

        this.init([["Or", 35]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    useEffect = () => {
        this.owner().getCard("Bière").add("Inventaire");

        this.move("Terrain");
        this.pose();
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().getCard("Bière").add("Inventaire");
        }
    };
};