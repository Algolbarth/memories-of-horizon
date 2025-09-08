import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Maire extends Creature {
    name = "Maire";

    constructor(system: System) {
        super(system);

        this.init([["Or", 105]]);
        this.familles.base.push("Humain");

        this.stat("Santé").base = 5;
        this.stat("Santé").current = 5;
        this.stat("Force").base = 5;

        this.text = Text;
    };

    startStepEffect = function () {
        this.owner.ressource("Or").current += 5 * this.owner.zone("Terrain").cards.length;
    };
}