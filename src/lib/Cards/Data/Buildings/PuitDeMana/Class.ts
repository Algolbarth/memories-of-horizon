import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class PuitDeMana extends Building {
    name = "Puit de mana";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);
        this.stat("Santé").base = 10;
        this.stat("Santé").current = 10;

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Potion de mana").add("Main");
        }
    };
}