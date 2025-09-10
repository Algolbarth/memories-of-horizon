import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class AncienSerpent extends Creature {
    name = "Ancien serpent";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Végétal", 15]]);
        this.familles.base.push("Reptile");

        this.stat("Constitution").init(15);
        this.stat("Force").base = 5;

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Mue").add("Réserve");
        }
    };
}