import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class MaitreChien extends Creature {
    name = "Maître chien";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    useEffect = () => {
        this.move("Terrain");
        this.owner.getCard("Chien").add("Terrain");
        this.owner.getCard("Chien").add("Terrain");
        this.pose();
    };

    startPhaseEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Chien").add("Terrain");
        }
    };
};