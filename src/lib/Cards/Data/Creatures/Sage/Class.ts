import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Sage extends Creature {
    name = "Sage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);
        this.familles.base.push("Humain");

        this.stat("Constitution").init(5);
        this.stat("Force").base = 5;
        this.stat("Intelligence").base = 1;

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            this.stat("Intelligence").increase(1);
        }
    };
}