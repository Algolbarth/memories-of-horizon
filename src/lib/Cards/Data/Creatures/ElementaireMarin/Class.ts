import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class ElementaireMarin extends Creature {
    name = "Élémentaire marin";

    constructor(system: System) {
        super(system);

        this.init([["Eau", 50]]);
        this.familles.base.push("Élémentaire");

        this.stat("Santé").base = 50;
        this.stat("Santé").current = 50;
        this.stat("Force").base = 50;

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone == "Terrain" && this.owner.ressource("Eau").total() >= 5) {
            this.owner.ressource("Eau").spend(5);
            this.stat("Force").add += 5;
            this.stat("Santé").add += 5;
            this.stat("Santé").current += 5;
        }
    };
}