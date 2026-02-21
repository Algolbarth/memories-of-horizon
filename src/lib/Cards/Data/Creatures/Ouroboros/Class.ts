import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Ouroboros extends Creature {
    name = "Ouroboros";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.initFamily(["Reptile"]);

        this.stat("Constitution").init(15);
        this.stat("Force").init(15);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().getCard("Pierre philosophale").add("Inventaire");
        }
    };
};