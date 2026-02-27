import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class AncienSerpent extends Creature {
    name = "Ancien serpent";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Végétal", 15]]);

        this.initFamily(["Reptile"]);

        this.stat("Constitution").init(15);
        this.stat("Force").init(5);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().getCard("Mue").add("Inventaire");
        }
    };
};