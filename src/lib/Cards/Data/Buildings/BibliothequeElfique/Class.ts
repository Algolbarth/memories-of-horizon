import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class BibliothequeElfique extends Building {
    name = "Bibliothèque elfique";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Végétal", 25]]);
        this.families.base.push("Elfe");

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card.type == "Créature" && card.families.total().includes("Elfe")) {
            this.stat("Intelligence").increase(1);
        }
    };
}