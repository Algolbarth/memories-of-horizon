import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Building } from '../../../class/building';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

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