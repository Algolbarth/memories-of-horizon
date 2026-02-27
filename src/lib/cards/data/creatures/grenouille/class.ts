import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class Grenouille extends Creature {
    name = "Grenouille";

    constructor(system: System) {
        super(system);

        this.init([["Or", 3], ["Eau", 2]]);

        this.stat("Constitution").init(2);
        this.stat("Force").init(2);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.move("Inventaire");
        }
    };
};