import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Building } from '../../../Class/Building';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

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
        if (this.zone.name == "Terrain" && card instanceof Creature && card.isFamily("Elfe")) {
            this.stat("Intelligence").increase(1);
        }
    };
};