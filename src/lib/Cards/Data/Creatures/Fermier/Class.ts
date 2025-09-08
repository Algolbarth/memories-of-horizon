import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Fermier extends Creature {
    name = "Fermier";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);
        this.familles.base.push("Humain");

        this.stat("Santé").base = 5;
        this.stat("Santé").current = 5;
        this.stat("Force").base = 5;

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            this.owner.ressource("Or").current += 5;
        }
    };
}