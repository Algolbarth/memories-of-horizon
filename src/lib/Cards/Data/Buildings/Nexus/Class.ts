import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class Nexus extends Building {
    name = "Nexus";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);
        this.familles.base.push("Élémentaire");

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card.type == "Créature" && card.familles.total().includes("Élémentaire")) {
            for (const element of card.elements.total()) {
                if (element != "Neutre") {
                    this.owner.ressource(element).production += 1;
                }
                else {
                    this.owner.ressource("Or").production += 1;
                }
            }
        }
    };
};