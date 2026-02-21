import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Building } from '../../../Class/Building';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Nexus extends Building {
    name = "Nexus";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.initFamily(["Élémentaire"]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Terrain") && card instanceof Creature && card.isFamily("Élémentaire")) {
            for (const element of card.elements.total()) {
                if (element != "Neutre") {
                    this.owner().ressource(element).increase(1);
                }
                else {
                    this.owner().ressource("Or").increase(1);
                }
            }
        }
    };
};