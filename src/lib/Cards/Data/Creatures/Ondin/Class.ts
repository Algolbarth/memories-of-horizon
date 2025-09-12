import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Ondin extends Creature {
    name = "Ondin";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5], ["Eau", 5]]);
        this.familles.base.push("Ondin");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    addEffect = (zone: string) => {
        if (zone == "Terrain") {
            this.owner.ressource("Eau").current += 5;
        }
    };
}