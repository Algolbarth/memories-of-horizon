import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class BibliothequeIncendiee extends Building {
    name = "Bibliothèque incendiée";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40], ["Feu", 40]]);

        this.stat("Constitution").init(10);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && this.owner == card.owner && ["Autodafé", "Bûcher des vanités"].includes(card.name)) {
            this.owner?.getCard("Écrits calcinés").add("Réserve");
        }
    };
};