import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class LouveNourriciere extends Creature {
    name = "Louve nourricière";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.initFamily(["Bête"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().getCard("Louveteau").add("Terrain");
            this.owner().getCard("Louveteau").add("Terrain");
        }
    };
};