import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class ElementaireDeFeu extends Creature {
    name = "Élémentaire de feu";

    constructor(system: System) {
        super(system);

        this.init([["Feu", 15]]);
        this.familles.base.push("Élémentaire");

        this.stat("Constitution").init(20);
        this.stat("Force").base = 20;
        this.text = Text;
    };

    addEffect = function (zone: string) {
        if (zone == "Terrain" && this.owner.ressource("Feu").max >= 1) {
            this.owner.ressource("Feu").max--;
        }
    };
}