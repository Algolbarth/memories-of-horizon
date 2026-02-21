import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class BibliothequeIncendiee extends Building {
    name = "Bibliothèque incendiée";

    constructor(system: System) {
        super(system);

        this.init([["Or", 35], ["Feu", 35]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Terrain") && this.isAlly(card) && ["Autodafé", "Bûcher des vanités"].includes(card.name)) {
            this.owner().getCard("Écrits calcinés").add("Inventaire");
        }
    };
};