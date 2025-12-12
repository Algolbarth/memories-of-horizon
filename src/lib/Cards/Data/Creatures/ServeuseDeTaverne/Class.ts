import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class ServeuseDeTaverne extends Creature {
    name = "Serveuse de taverne";

    constructor(system: System) {
        super(system);

        this.init([["Or", 35]]);
        this.familles.base.push("Humain");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    useEffect = () => {
        this.move("Terrain");
        this.owner.getCard("Bière").add("Réserve");
        this.pose();
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Bière").add("Terrain");
        }
    };
}