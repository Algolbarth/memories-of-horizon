import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class ElementaireDEau extends Creature {
    name = "Élémentaire d'eau";

    constructor(system: System) {
        super(system);

        this.init([["Eau", 15]]);
        this.families.base.push("Élémentaire");

        this.stat("Constitution").init(15);
        this.stat("Force").init(15);

        this.text = Text;
    };

    addEffect = (zone: string) => {
        if (zone == "Terrain" && this.owner.ressource("Eau").total() >= 5) {
            this.owner.ressource("Eau").spend(5);
            this.stat("Constitution").increase(5);
            this.stat("Force").increase(5);
        }
    };
}