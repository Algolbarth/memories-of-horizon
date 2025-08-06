import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Ondin extends Creature {
    name = "Ondin";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5], ["Eau", 5]]);
        this.familles.base.push("Ondin");

        this.stat("Vie").base = 5;
        this.stat("Vie").current = 5;
        this.stat("Attaque").base = 5;

        this.text = Text;
    };

    addEffect = function (zone: string) {
        if (zone == "Terrain") {
            this.owner.ressource("Eau").current += 5;
        }
    };
}