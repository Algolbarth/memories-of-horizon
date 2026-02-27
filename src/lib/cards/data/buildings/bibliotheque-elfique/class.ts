import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Building } from '../../../class/building';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class BibliothequeElfique extends Building {
    name = "Bibliothèque elfique";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Végétal", 25]]);

        this.initFamily(["Elfe"]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Terrain") && card instanceof Creature && card.isFamily("Elfe")) {
            this.stat("Intelligence").increase(1);
        }
    };
};