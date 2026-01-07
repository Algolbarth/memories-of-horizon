import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Grenouille extends Creature {
    name = "Grenouille";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5], ["Eau", 5]]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.move("Réserve");
        }
    };
};