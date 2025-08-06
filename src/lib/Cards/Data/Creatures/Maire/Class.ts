import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Maire extends Creature {
    name = "Maire";

    constructor(system: System) {
        super(system);

        this.init([["Or", 105]]);
        this.familles.base.push("Humain");

        this.stat("Vie").base = 5;
        this.stat("Vie").current = 5;
        this.stat("Attaque").base = 5;

        this.text = Text;
    };

    startStepEffect = function () {
        this.owner.ressource("Or").current += 5 * this.owner.zone("Terrain").cards.length;
    };
}