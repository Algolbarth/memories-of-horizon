import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class ElementaireDEau extends Creature {
    name = "Élémentaire d'eau";

    constructor(system: System) {
        super(system);

        this.init([["Eau", 15]]);
        this.familles.base.push("Élémentaire");

        this.stat("Constitution").init(15);
        this.stat("Force").base = 15;

        this.text = Text;
    };

    text = function () {
        return "";
    };

    addEffect = function (zone: string) {
        if (zone == "Terrain" && this.owner.ressource("Eau").total() >= 5) {
            this.owner.ressource("Eau").spend(5);
            this.stat("Force").increase(5);
            this.stat("Santé").increase(5);
            this.stat("Vitalité").increase(5);
        }
    };
}