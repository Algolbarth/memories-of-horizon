import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class ElementaireDEau extends Creature {
    name = "Élémentaire d'eau";

    constructor(system: System) {
        super(system);

        this.init([["Eau", 15]]);

        this.initFamily(["Élémentaire"]);

        this.stat("Constitution").init(15);
        this.stat("Force").init(15);

        this.text = Text;
    };

    addEffect = (zone: string) => {
        if (zone == "Terrain" && this.owner().ressource("Eau").total() >= 5) {
            this.owner().ressource("Eau").spend(5);
            this.stat("Constitution").increase(5);
            this.stat("Force").increase(5);
        }
    };
};