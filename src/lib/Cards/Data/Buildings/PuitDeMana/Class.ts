import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class PuitDeMana extends Building {
    name = "Puit de mana";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);
        this.stat("Constitution").init(10);

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Potion de mana").add("Réserve");
        }
    };
}