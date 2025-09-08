import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class ElementaireDEau extends Creature {
    name = "Élémentaire d'eau";

    constructor(system: System) {
        super(system);

        this.init([["Eau", 15]]);
        this.familles.base.push("Élémentaire");

        this.stat("Santé").base = 15;
        this.stat("Santé").current = 15;
        this.stat("Force").base = 15;

        this.text = Text;
    };

    text = function () {
        return "";
    };

    addEffect = function (zone: string) {
        if (zone == "Terrain" && this.owner.ressource("Eau").total() >= 5) {
            this.owner.ressource("Eau").spend(5);
            this.stat("Force").add += 5;
            this.stat("Santé").add += 5;
            this.stat("Santé").current += 5;
        }
    };
}